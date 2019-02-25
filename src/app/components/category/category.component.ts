import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "Category",
	moduleId: module.id,
	templateUrl: "./category.component.html",
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions) {
	}

	ngOnInit(): void {
	}

	goBack(): void {
		this.routerExtensions.back();
	}
}