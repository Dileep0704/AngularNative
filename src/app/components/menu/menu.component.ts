import { Component, OnInit, DoCheck } from '@angular/core';
import { skip } from 'rxjs/operators';
import { MenuService } from '../../shared/menu/menu.service';
import { CartService } from '../../shared/cart/cart.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  restaurantCatalog: Product[];
  itemsInCart = {};
  olditemsInCart = {}
  constructor(private menuService:MenuService,
    private cartService:CartService) { 
      this.itemsInCart = cartService.itemsInCart;
    }

  ngOnInit() {
    this.menuService.restaurantCatalog.pipe(skip(1)).subscribe((menu: Product[])=> {
      this.restaurantCatalog = menu
    })
  }

  add(item: Product) {
    this.cartService.addToCart.next(item)
  }

  remove(item: Product) {
    this.cartService.removeFromCart.next(item)
  }

  ngDoCheck(){
    if (JSON.stringify(this.olditemsInCart) !== JSON.stringify(this.itemsInCart)) {
      this.olditemsInCart = this.itemsInCart;
    }
  }

}
