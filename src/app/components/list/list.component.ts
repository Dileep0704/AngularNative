import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public personList: Array<Object>;

  constructor(private router: Router, private location: Location) {
    this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
    this.location.subscribe((path) => {
      this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
    });
  }

  ngOnInit() { }

  create() {
    this.router.navigate(["/create"]);
  }

}
