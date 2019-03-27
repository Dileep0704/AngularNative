import { Component, OnInit } from "@angular/core";
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as imagepicker from "nativescript-imagepicker";
// import * as fs from "file-system";
// import { knownFolders, path } from "file-system";
import * as bgHttp from "nativescript-background-http";


@Component({
	selector: "Browse",
	moduleId: module.id,
	templateUrl: "./browse.component.html",
	styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

	selectedImg;
	constructor() {
	}

	ngOnInit(): void {
	}

	onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
	}

	onSelectImageTap() {
		let context = imagepicker.create({
			mode: "single"
		});
		this.startSelection(context);
	}

	private startSelection(context) {
		context.authorize()
			.then(() => {
				return context.present();
			})
			.then((selection) => {
				console.log("Selection done: " + JSON.stringify(selection));
				let imageAsset = selection.length > 0 ? selection[0] : null;

				if (imageAsset) {
					this.getImageFilePath(imageAsset).then((path) => {
						console.log(`path: ${path}`);
						// this.uploadImage(path);
						this.selectedImg = path;
					});
				}

			}).catch(function (e) {
				console.log(e);
			});
	}

	private getImageFilePath(imageAsset): Promise<string> {
		return new Promise((resolve) => {
				resolve(imageAsset.android);
		});
	}

	// private uploadImage(path: string) {
	// 	let file = fs.File.fromPath(path);
	// 	this.currentFileNameBeingUploaded = file.path.substr(file.path.lastIndexOf("/") + 1);

	// 	const request = this.createNewRequest();
	// 	request.description = `uploading image ${file.path}`;
	// 	request.headers["File-Name"] = this.currentFileNameBeingUploaded;

	// 	let task = this.session.uploadFile(file.path, request);

	// 	task.on("progress", this.onEvent.bind(this));
	// 	task.on("error", this.onEvent.bind(this));
	// 	task.on("responded", this.onEvent.bind(this));
	// 	task.on("complete", this.onEvent.bind(this));
	// }

}