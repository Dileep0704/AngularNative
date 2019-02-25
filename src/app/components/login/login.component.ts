
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
//import * as Toast from "nativescript-toast";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  public login(username: string, password: string) {
    this.http.post("http://localhost:3000/authenticate", JSON.stringify({ username: username, password: password }))
      //.map(result => result.json())
      .subscribe(result => {
        this.router.navigate(["authenticated"], { queryParams: { jwt: result } });
      }, error => {
        //Toast.makeText(error.json().message).show();
      });
  }

}
