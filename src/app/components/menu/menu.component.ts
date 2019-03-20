import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';
import { MenuService } from '../../shared/menu/menu.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  restaurantCatalog: Product[];
  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.menuService.restaurantCatalog.pipe(skip(1)).subscribe((menu: Product[])=> {
      this.restaurantCatalog = menu
    })
  }

  add(item: Product) {
    if(item.numberInCart)
      item.numberInCart += 1
    else
      item.numberInCart = 1
  }

  remove(item: Product) {
    if(item.numberInCart)
      item.numberInCart -= 1
    else
      item.numberInCart = 0
  }

}
