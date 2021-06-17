import { Component, Input, OnInit } from '@angular/core';
import { App, Review, AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-reviews-block',
  templateUrl: './reviews-block.component.html',
  styleUrls: ['./reviews-block.component.scss', "../../main.component.scss"]
})
export class ReviewsBlockComponent implements OnInit {
  @Input () AppId: number | "new";
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

  get Reviews () : Review[] {
    return this.currentApp.reviews;
  }

  ngOnInit() {
  }

}
