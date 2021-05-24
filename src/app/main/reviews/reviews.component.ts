import { Component, Inject, Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfigService } from './app-config.service';
import { ReviewsBlockComponent } from "./reviews-block/reviews-block.component";

import { AppConfig } from 'src/shared/main/app-config';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  config: AppConfigService;
  constructor (config: AppConfigService) {
    this.config = config;
  }
  
  currentAppId = 0;

  openAddAppModal() {
    let modal = document.querySelector(".add-app-modal");
    modal.classList.toggle("hidden");
  }
}
