import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "./user.model";
import AppConfig from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, 
    private routerExtensions: RouterExtensions,
  ) { 

  }

  register(user: User) {
    return this.http.post(AppConfig.baseUrl + "api/users/create", { username: user.email, password: user.password })
  }

  login(user: User) {
    return this.http.post(AppConfig.baseUrl + "api/users/validate", { username: user.email, password: user.password })
  }

  logout() {
    // this.http.post("http://localhost:3000/authenticate", JSON.stringify({ username: username, password: password }))
    // //.map(result => result.json())
    // .subscribe(result => {
    //   console.log(result)
    //   //this.router.navigate(["authenticated"], { queryParams: { jwt: result } });
    // }, error => {
    //   //Toast.makeText(error.json().message).show();
    // });
  }

  resetPassword(email) {
    // this.http.post("http://localhost:3000/authenticate", JSON.stringify({ username: username, password: password }))
    // //.map(result => result.json())
    // .subscribe(result => {
    //   console.log(result)
    //   //this.router.navigate(["authenticated"], { queryParams: { jwt: result } });
    // }, error => {
    //   //Toast.makeText(error.json().message).show();
    // });
  }

}
