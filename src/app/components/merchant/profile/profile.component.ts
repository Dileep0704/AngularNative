import { Component, OnInit } from '@angular/core';
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as imagepicker from "nativescript-imagepicker";
import { File } from "tns-core-modules/file-system";
import { Merchant } from '../../../model/merchant.model';
import { StateService } from '../../../shared/state.service';
import { UserService } from '../../../shared/user/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  merchantProfile: Merchant;

  constructor(private stateService: StateService,
    private userService: UserService,) { }

  ngOnInit() {
    this.merchantProfile = new Merchant(this.stateService.loggedInUser.id);
    this.userService.getMerchantDetails(this.stateService.loggedInUser.id)
    .subscribe((merchant : Merchant) => {
      //Update merchant if available
      if(merchant != null) this.merchantProfile = merchant
    })
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
						this.merchantProfile.logo = path;						
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
  
  submit() {
		this.userService.updateMerchant(this.merchantProfile)
	}

}
