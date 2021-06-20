import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', "../main/main.component.scss"]
})
export class LandingHeaderComponent implements OnInit {
  router: Router;
  auth: AuthService;
  constructor(router: Router, auth: AuthService) {
    this.router = router;
    this.auth = auth;
  }
  
  get isLanding (): boolean {return this.router.url === '/' || this.router.url.startsWith('/#');}
  
  ngOnInit() {
    
  }

  toggleModalById(id) {
    let modal = document.getElementById(id);
    modal.classList.toggle("hidden");
  }

  logout() {
    this.auth.logout();
    window.location.href = "../"
  }

}
