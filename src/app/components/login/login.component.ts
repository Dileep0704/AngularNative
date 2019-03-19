
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
//import * as Toast from "nativescript-toast";
import { map } from 'rxjs/operators';

import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../../shared/user/user.model";
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggingIn = true;
  user: User;
  processing = false;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(private page: Page, 
    private userService: UserService, 
    private routerExtensions: RouterExtensions
  ) {
    this.page.actionBarHidden = true;
    this.user = new User();
    this.user.email = "dileep@gmail.com";
    this.user.password = "password";
   }

  ngOnInit() {
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    if (!this.user.email || !this.user.password) {
      this.alert("Please provide both an email address and password.");
      return;
    }

    this.processing = true;
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.register();
    }
  }

  // login1(username: string, password: string) {
  //   this.userService.login(username,password);
  // }

  login() {
    this.userService.login(this.user)
      .subscribe(() => {
        this.processing = false;
        this.routerExtensions.navigate(["/featured"], { clearHistory: true });
      },
      error => {
        this.processing = false;
        console.log("Not a valid user")
        this.alert("Unfortunately we could not find your account.");
      })
  }

  register() {
    if (this.user.password != this.user.confirmPassword) {
      this.alert("Your passwords do not match.");
      return;
    }
    this.userService.register(this.user)
      .subscribe(() => {
        this.processing = false;
        this.alert("Your account was successfully created.");
        this.isLoggingIn = true;
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
      },
      error => {
        this.processing = false;
        this.alert("Unfortunately we were unable to create your account.");
      })
  }

  // forgotPassword() {
  //   prompt({
  //     title: "Forgot Password",
  //     message: "Enter the email address you used to register for APP NAME to reset your password.",
  //     inputType: "email",
  //     defaultText: "",
  //     okButtonText: "Ok",
  //     cancelButtonText: "Cancel"
  //   }).then((data) => {
  //     if (data.result) {
  //       this.userService.resetPassword(data.text.trim())
  //         .then(() => {
  //           this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
  //         }).catch(() => {
  //           this.alert("Unfortunately, an error occurred resetting your password.");
  //         });
  //     }
  //   });
  // }

  focusPassword() {
    this.password.nativeElement.focus();
  }
  focusConfirmPassword() {
    if (!this.isLoggingIn) {
      this.confirmPassword.nativeElement.focus();
    }
  }

  alert(message: string) {
    return alert({
      title: "APP NAME",
      okButtonText: "OK",
      message: message
    });
  }

}
