import { Component, OnInit } from '@angular/core';
import { Integrations } from 'src/shared/landing/integrations';
import { Services } from 'src/shared/landing/services';
import { WhatIsReviewGator } from 'src/shared/landing/what-is-rg';
import { OurTeam } from './../../shared/landing/our-team';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent{
  OurTeam = OurTeam;
  WhatIsReviewGator = WhatIsReviewGator;
  Services = Services;
  Integrations = Integrations;

  currentSlide = 1;
  SlideInterval = 7000;
  Slides = [
    {
      img: '/assets/images/landing/pexels-daria-shevtsova-3626622.jpg',
      text: 'ReviewGator - ваш помощник для мониторинга отзывов',
      subtext: 'Пришло время перенести ответсвенность!'
    },
    {
      img: '/assets/images/landing/pexels-fauxels-3183197.jpg',
      text: 'Расширь свои возможности по доступным ценам',
      subtext: 'Меняй свой бизнес к лучшему!'
    }
    ];

  nextSlide(): void {
    this.currentSlide++;
    if (this.currentSlide >= this.Slides.length) {
      this.currentSlide = 0;
    }
  }

  constructor() {
    setInterval(() => this.nextSlide(), 7000);
  }
}
