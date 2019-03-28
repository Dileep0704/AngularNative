import { Component, OnInit } from "@angular/core";
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as imagepicker from "nativescript-imagepicker";
import { File } from "tns-core-modules/file-system";
// import * as bgHttp from "nativescript-background-http";
import { BehaviorSubject } from 'rxjs';
import AppConfig from "../../shared/app.config";
import { Product } from '../../model/product.model';
import { MenuService } from '../../shared/menu/menu.service';

@Component({
	selector: "Browse",
	moduleId: module.id,
	templateUrl: "./browse.component.html",
	styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

	menuItem: Product;
	private event = new BehaviorSubject<any>({});
	// private session: any;
	// private url = "http://www.csm-testcenter.org/test";

	constructor(private menuService:MenuService) {
		// this.session = bgHttp.session("image-upload");
		this.menuItem = new Product();
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
						this.menuItem.imageUrl = path;						
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
	// 	let file = File.fromPath(path);
	// 	this.currentFileNameBeingUploaded = file.path.substr(file.path.lastIndexOf("/") + 1);

	// 	const request = this.createNewRequest();
	// 	request.description = `uploading image ${file.path}`;
	// 	request.headers["File-Name"] = this.currentFileNameBeingUploaded;

	// 	let task = this.session.uploadFile(file.path, request);

	// 	task.on("progress", this.progressHandler);
	// 	task.on("complete", this.completeHandler);
	// }

	// private createNewRequest() {
	// 	const request = {
	// 		url: this.url,
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/octet-stream"
	// 		},
	// 		description: "uploading file...",
	// 		androidAutoDeleteAfterUpload: false,
	// 		androidNotificationTitle: "NativeScript HTTP background"
	// 	};

	// 	return request;
	// }

	// progressHandler(e) {
	// 	console.log("uploaded " + e.currentBytes + " / " + e.totalBytes);
	// }

	// completeHandler(e) {
	// 	console.log("received " + e.responseCode + " code");
	// 	var serverResponse = e.response;
	// }

	submit() {
		this.menuService.createMenuItem(this.menuItem)
	}

}