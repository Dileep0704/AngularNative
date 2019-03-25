import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../shared/menu/menu.service';
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item: any;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {
    this.getItemDetails();
  }

  onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
  }

  getItemDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.menuService.getItemDetails(id)
      .subscribe(item => this.item = item);
  }

  onCloseTap(): void {
    this.routerExtensions.back();
  }

}
