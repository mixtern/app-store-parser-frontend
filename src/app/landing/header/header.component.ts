import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    
  }

}
