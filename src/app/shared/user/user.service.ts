import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RouterExtensions } from "nativescript-angular/router";
import { ImageSource, fromFile } from "tns-core-modules/image-source";
import { alert } from "tns-core-modules/ui/dialogs";

import { User } from "./user.model";
import { Merchant } from '../../model/merchant.model';
import AppConfig from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, 
    private routerExtensions: RouterExtensions,
  ) { }

  register(user: User) {
    return this.http.post(AppConfig.baseUrl + `api/${user.role}/create`, { username: user.email, password: user.password })
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

  updateMerchant(merchant :Merchant) {
    merchant.logo = this.convertImgToBase64(merchant.logo)
    this.http.post(AppConfig.baseUrl + "api/merchants/restaurants/create", merchant)
    .subscribe(() => {
      this.alert("Item Created Successfully");
    },
    error => {
      this.alert("Unfortunately Item Didn't Created");
    })
  }

  convertImgToBase64(filePath) {
		const img: ImageSource = <ImageSource>fromFile(filePath);
    const base64String = img.toBase64String("jpg");
    return base64String;
  }

  //ToDo: create alert service
  alert(message: string) {
    return alert({
      title: "APP NAME",
      okButtonText: "OK",
      message: message
    });
  }

}
