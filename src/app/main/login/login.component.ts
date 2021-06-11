import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../main.component.scss', "./login.component.scss"]
})
export class LoginComponent implements OnInit {
  auth: AuthService;
  constructor(auth: AuthService) { this.auth = auth }

  login(){}

  ngOnInit() {
  }

}
