import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  
  get isLanding (): boolean {return this.router.url === '/' || this.router.url.startsWith('/#');}
  
  ngOnInit() {
    
  }

  toggleNavigation() {
    let modal = document.getElementById("navigation");
    modal.classList.toggle("hidden");
  }

}
