import { Component, OnInit } from "@angular/core";
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
	selector: "Featured",
	moduleId: module.id,
	templateUrl: "./featured.component.html",
	styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
	}

}