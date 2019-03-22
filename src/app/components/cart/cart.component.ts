import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/cart/cart.service';

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

  ngOnInit() {
  }

  calculateTotal() {
    this.cartPrice = 0
    Object.keys(this.itemsInCart).forEach(itemId => {
      this.cartPrice += this.itemsInCart[itemId].cost * this.itemsInCart[itemId].numberInCart
      console.log(this.cartPrice)
    });
  }
}
