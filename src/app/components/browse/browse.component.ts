import { Component, OnInit } from "@angular/core";
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
	selector: "Browse",
	moduleId: module.id,
	templateUrl: "./browse.component.html",
	styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
	}
}