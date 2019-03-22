import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { skip } from 'rxjs/operators';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsInCart = {};
  _itemsInCart = new BehaviorSubject<any>({});
  addToCart = new Subject<any>();
  removeFromCart = new Subject<any>();

  constructor() { 
    this.addToCart.subscribe((item) => this.addItemToCart(item))
    this.removeFromCart.subscribe((item) => this.removeItemFromCart(item))
  }

  addItemToCart(item) {
    if(this.itemsInCart.hasOwnProperty(item.itemId)) {
      item.numberInCart = item.numberInCart + 1
      this.itemsInCart[item.itemId] = item
    } else {
      item.numberInCart = 1
      this.itemsInCart[item.itemId] = item
    }
    this._itemsInCart.next(this.itemsInCart)
  }

  removeItemFromCart(item) {
    if(this.itemsInCart.hasOwnProperty(item.itemId) && this.itemsInCart[item.itemId].numberInCart !== 0) {
      item.numberInCart = item.numberInCart - 1
      this.itemsInCart[item.itemId] = item
    } else {
      item.numberInCart = 0
      this.itemsInCart[item.itemId] = item
    }
    this._itemsInCart.next(this.itemsInCart)
  }

}
