import { Component, OnInit } from "@angular/core";
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
	selector: "Search",
	moduleId: module.id,
	templateUrl: "./search.component.html",
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
	}
}