import { Component, Input, OnInit } from '@angular/core';
import { AppConfigService, App } from '../app-config.service';

@Component({
  selector: 'app-app-config-modal',
  templateUrl: './app-config-modal.component.html',
  styleUrls: ['./app-config-modal.component.scss']
})

export class AppConfigModalComponent implements OnInit {
  @Input () AppId: number | "new";
  appId: number;
  get isNew () : boolean {return this.AppId === "new"};
  config: AppConfigService;
  appLink:HTMLInputElement;
  slackLink:HTMLInputElement;
  constructor(t:AppConfigService) {
    this.config = t;
  }

  get currentApp () {
    return this.config.apps[this.currentAppIndex];
  }
  set currentApp (value: App) {
    this.config.apps[this.currentAppIndex] = value;
  };

  private get currentAppIndex () {
    return this.config.apps.findIndex(x => x.id === this.AppId);
  }

  ngOnInit() {
    this.appLink = document.getElementById("app-link") as HTMLInputElement;
    this.slackLink = document.getElementById("slack-link") as HTMLInputElement;
  }

  resetForm() {
    this.appLink.value = "";
    this.slackLink.value = "";
  }

  openAddAppModal() {
    let modal = document.querySelector(".add-app-modal");
    modal.classList.toggle("hidden");
  }

  saveApp() {
    let appLink = this.appLink.value;
    let slackLink = this.slackLink.value;
    if (this.isNew) {
      this.config.createApp(Math.round(Math.random()*Number.MAX_SAFE_INTEGER), appLink, slackLink);
    }
    else {
      this.currentApp = {id: this.appId, appLink, slackLink};
    }
    this.openAddAppModal();
    this.resetForm();
  }
}
