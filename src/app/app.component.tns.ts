import { Component, ViewChild } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  @ViewChild(RadSideDrawerComponent) sideDrawerComponent: RadSideDrawerComponent;

  constructor(private routerExtensions: RouterExtensions) { }

  navigateToFeatured(): void {
    this.routerExtensions.navigate(["/featured"], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  navigateToBrowse(): void {
    this.routerExtensions.navigate(["/browse"], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }

  navigateToSearch(): void {
    this.routerExtensions.navigate(["/search"], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }
}
