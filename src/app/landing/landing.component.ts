import { Component, OnInit } from '@angular/core';
import { Integrations } from 'src/shared/landing/integrations';
import { Services } from 'src/shared/landing/services';
import { Slides } from 'src/shared/landing/slides';
import { WhatIsReviewGator } from 'src/shared/landing/what-is-rg';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent{
  WhatIsReviewGator = WhatIsReviewGator;
  Services = Services;
  Integrations = Integrations;

  currentSlide = 1;
  Slides = Slides;

  nextSlide(): void {
    this.currentSlide++;
    if (this.currentSlide >= this.Slides.length) {
      this.currentSlide = 0;
    }
  }

  constructor() {
    setInterval(() => this.nextSlide(), 6000);
  }
}
