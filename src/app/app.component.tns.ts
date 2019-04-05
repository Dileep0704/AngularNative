import { Component, ViewChild } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { StateService } from './shared/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  @ViewChild(RadSideDrawerComponent) sideDrawerComponent: RadSideDrawerComponent;

  state;
  constructor(private routerExtensions: RouterExtensions,
    private stateService: StateService) { 
      this.stateService = stateService
    }

  navigateToProfile(): void {
    this.routerExtensions.navigate(["/merchantProfile"], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }  

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

  navigateToList(): void {
    this.routerExtensions.navigate(["/list"], { clearHistory: true });
    this.sideDrawerComponent.sideDrawer.closeDrawer();
  }
}
