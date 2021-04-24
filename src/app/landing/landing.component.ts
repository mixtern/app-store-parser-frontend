import { Component, OnInit } from '@angular/core';
import { OurTeam } from "./../../shared/landing/our-team"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  OurTeam = OurTeam;
  constructor() { }

  ngOnInit() {
  }

}
