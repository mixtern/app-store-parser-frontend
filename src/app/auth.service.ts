import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

class UserData {

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: UserData;
  constructor() { }

  public get token(): string { return localStorage.getItem("access"); }
  public get refreshToken(): string { return localStorage.getItem("refresh"); }

  login() {
    axios.post("https://gres.ml/api/login", {
    'email': 'email@email.email',
    'password': 'Password!!!'
    })
    .then(res => {
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
    })
    .catch(err => {
      console.log(err);
    })
  }

  logout() {
    axios.post("https://gres.ml/api/logout", {
      access: this.token,
      refresh: this.refreshToken},
      {
        headers: {"Authorization" : "Bearer " + this.token}
      }
    )
    .catch(res => {
      console.log(res);
    })
  }

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
    })
    .catch(err => {
      console.log(err);
    })
  }

}
