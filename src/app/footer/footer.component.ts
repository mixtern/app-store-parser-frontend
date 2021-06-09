import { Component, OnInit } from '@angular/core';
import { OurTeam } from 'src/shared/landing/our-team';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  OurTeam = OurTeam;
  constructor() { }

  ngOnInit() {
  }

}
