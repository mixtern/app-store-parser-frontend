import { Component, Inject, Injectable, Input } from '@angular/core';
import { AppConfigService } from './app-config.service';

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
  
  currentAppId: number | "new" = "new";

  openAddAppModal(id: number | "new") {
    this.currentAppId = id;
    let modal = document.querySelector(".add-app-modal");
    modal.classList.toggle("hidden");
  }
}
