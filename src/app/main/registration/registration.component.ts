import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../main.component.scss', "./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  auth: AuthService;
  constructor(auth: AuthService) { this.auth = auth }

  registrate() {
    axios.post("https://gres.ml/api/registration", {
      'password': 'Password!!!',
      'first_name': 'TestUser',
      'last_name': 'TestUser',
      'email': 'emal@email.email'
    })
    .then(res => {
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      window.location.href = "../reviews";
    })
    .catch(err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
