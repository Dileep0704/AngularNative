import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    private personList: Array<Object>;
    public firstname: string;
    public lastname: string;

    constructor(private location: Location, private routerExtensions: RouterExtensions) {
        this.location = location;
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        this.firstname = "";
        this.lastname = "";
    }

  ngOnInit() {}

  save() {
    if(this.firstname != "" && this.lastname != "") {
        this.personList.push({firstname: this.firstname, lastname: this.lastname});
        ApplicationSettings.setString("people", JSON.stringify(this.personList));
        this.location.back();
        this.routerExtensions.navigate(["/list"]);
    }
}

}
