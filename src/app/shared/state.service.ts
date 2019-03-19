import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from "./user/user.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  _loggedInUser: BehaviorSubject<User>;
  loggedInUser: User;
  constructor() { 
    // this._loggedInUser.subscribe(user => {
    //   this.loggedInUser = user
    //   console.log("In state service: " + this.loggedInUser)
    // })
  }

  static isUserLoggedIn() {
    return false;
  }
  
}
