import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, config } from 'rxjs';
import { AppConfig } from 'src/shared/main/app-config';
import { AppConfigService, App } from '../app-config.service';

@Component({
  selector: 'app-app-config-modal',
  templateUrl: './app-config-modal.component.html',
  styleUrls: ['./app-config-modal.component.scss']
})

export class AppConfigModalComponent implements OnInit {
  @Input () AppId: number;
  config:AppConfigService;
  constructor(t:AppConfigService) { this.config = t; }

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
  }

  openAddAppModal() {
    let modal = document.querySelector(".add-app-modal");
    modal.classList.toggle("hidden");
  }

  saveApp() {
    let appLink = (document.getElementById("app-link") as HTMLInputElement).value;
    let slackLink = (document.getElementById("slack-link") as HTMLInputElement).value;
    this.currentApp = {id: this.AppId, appLink, slackLink};
    this.openAddAppModal();
  }
}
