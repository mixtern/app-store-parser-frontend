import { Component, Inject, Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppConfigService } from './app-config.service';

import { AppConfig } from 'src/shared/main/app-config';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  Apps = ["a","a","a"];
  Reviews = [["sadsa"],[],['da','dsa','asdsq']];
  a = 0;

  openAddAppModal() {
    let modal = document.querySelector(".add-app-modal");
    modal.classList.toggle("hidden");
  }
}
