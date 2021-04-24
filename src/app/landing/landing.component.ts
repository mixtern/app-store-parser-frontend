import { Component, OnInit } from '@angular/core';
import { Integrations } from 'src/shared/landing/integrations';
import { Services } from 'src/shared/landing/services';
import { WhatIsReviewGator } from 'src/shared/landing/what-is-rg';
import { OurTeam } from "./../../shared/landing/our-team"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  OurTeam = OurTeam;
  WhatIsReviewGator = WhatIsReviewGator;
  Services = Services;
  Integrations = Integrations;

  constructor() { }

  ngOnInit() {
  }

}
