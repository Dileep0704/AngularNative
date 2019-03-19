import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';
import { MenuService } from '../../shared/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  restaurantCatalog: any[];
  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.menuService.restaurantCatalog.pipe(skip(1)).subscribe((menu)=> {
      this.restaurantCatalog = menu
    })
  }

}
