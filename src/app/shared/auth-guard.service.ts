import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { RouterExtensions } from "nativescript-angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private stateService: StateService,
    private routerExtensions: RouterExtensions) { }

  canActivate() {
    if (this.stateService.isUserLoggedIn()) {
      return true;
    } else {
      this.routerExtensions.navigate(["/login"]);
      return false;
    }
  }

}
