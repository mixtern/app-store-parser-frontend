import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
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
    axios.post("https://gres.ml/api/logout", {
      access: this.auth.token,
      refresh: this.auth.refreshToken},
      {
        headers: {"Authorization" : "Bearer " + this.auth.token}
      }
    )
    .then(res => {
      console.log(res);
    })
    .catch(res => {
      console.log(res);
    })
  }

}
