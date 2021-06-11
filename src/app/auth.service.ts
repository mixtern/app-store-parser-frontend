import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class UserData {

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  userData: UserData;
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  login() {}

  register() {}

}
