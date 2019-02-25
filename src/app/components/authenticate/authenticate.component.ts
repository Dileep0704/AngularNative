import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  public content: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.http.get("http://localhost:3000/protected")
          //.map(result => result.json())
          .subscribe(result => {
              //this.content = result.message;
          });
  });

  }

}
