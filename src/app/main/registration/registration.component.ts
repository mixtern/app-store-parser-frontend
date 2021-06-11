import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../main.component.scss', "./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  auth: AuthService;
  constructor(auth: AuthService) { this.auth = auth }

  ngOnInit() {
  }

}
