import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from "./user/user.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  _loggedInUser = new BehaviorSubject<User>(new User);
  loggedInUser: User;

  roles = Object.freeze({
    customer: 'user',
    merchant: 'merchant'
  })

  constructor() { 
    this._loggedInUser.subscribe(user => {
      this.loggedInUser = user
    })
  }

  isUserLoggedIn() {
    if (this.loggedInUser.email)
      return true;
    else
      return false;
  }
  
}
