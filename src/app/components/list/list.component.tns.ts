import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as ApplicationSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public personList: Array<Object>;

  constructor(private router: Router, private location: Location) {
    this.router = router;
    this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
    this.location.subscribe((path) => {
      this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
    });
  }

  ngOnInit() { }

  create() {
    this.router.navigate(["/featured"]);
  }

  onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
	}

}
