import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public personList: Array<Object>;
  public firstname: string;
  public lastname: string;

  constructor(private location: Location) {
      this.personList = localStorage.getItem("people") != null ? JSON.parse(localStorage.getItem("people")) : [];
      this.firstname = "";
      this.lastname = "";
  }

  ngOnInit() {}

  save() {
      if(this.firstname != "" && this.lastname != "") {
          this.personList.push({firstname: this.firstname, lastname: this.lastname});
          localStorage.setItem("people", JSON.stringify(this.personList));
          this.location.back();
      }
  }

}
