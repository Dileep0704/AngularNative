import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "Item",
	moduleId: module.id,
	templateUrl: "./item.component.html",
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions) {
	}

	ngOnInit(): void {
	}

	goBack(): void {
		this.routerExtensions.back();
	}
}