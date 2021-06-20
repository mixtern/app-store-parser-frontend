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
    //axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.access;
  })
  .catch(err => {
    console.log(err);
  })
}

  register() {}

}
