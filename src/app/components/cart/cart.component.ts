import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart/cart.service';
import { getRootView } from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsInCart = {};
  cartPrice :number;
  constructor(private cartService:CartService) { 
    cartService._itemsInCart.subscribe((cartItems) => { 
      this.itemsInCart = cartItems
      this.calculateTotal()
    })
  }

  onDrawerButtonTap(): void {
		const sideDrawer = <RadSideDrawer>getRootView();
		sideDrawer.showDrawer();
  }
  
  ngOnInit() {
  }

  calculateTotal() {
    this.cartPrice = 0
    Object.keys(this.itemsInCart).forEach(itemId => {
      this.cartPrice += this.itemsInCart[itemId].cost * this.itemsInCart[itemId].numberInCart
    });
  }
}
