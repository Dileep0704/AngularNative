import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ImageSource, fromFile } from "tns-core-modules/image-source";
import { alert } from "tns-core-modules/ui/dialogs";
import { StateService } from '../../shared/state.service';
import { ScannerConfig } from "../scanner/scanner.config";
import { Product } from '../../model/product.model';

import AppConfig from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Product[];
  restaurantCatalog: BehaviorSubject<Product[]>;
  constructor(private http: HttpClient,
    private stateService: StateService) { 
    this.restaurantCatalog = new BehaviorSubject<Product[]>([]);
  }

  getMenu(merchantId) {
    merchantId=6
    this.http.get(AppConfig.baseUrl + `/api/merchants/restaurants/${merchantId}/menu/get`)
    .subscribe((menu: Product[]) => {
      this.menu = menu
      this.restaurantCatalog.next(menu);
    })
    //this.restaurantCatalog.next(ScannerConfig.dummyData);
  }

  getItemDetails(id: number): Observable<any> {
    //return of(ScannerConfig.dummyData.filter((item) => item.id === id)[0]);
    return of(this.menu.filter((item) => item.itemId === id)[0]);
  }

  createMenuItem(menuItem :Product) {
    var merchantId = this.stateService.loggedInUser.id
    menuItem.imageUrl = this.convertImgToBase64(menuItem.imageUrl)
    this.http.post(AppConfig.baseUrl + `/api/merchants/restaurants/${merchantId}/menu/create`,menuItem)
    .subscribe(() => {
      this.alert("Item Created Successfully");
    },
    error => {
      console.log('HTTP Error', error)
      this.alert("Unfortunately Item Didn't Created");
    })
  }

  convertImgToBase64(filePath) {
		const img: ImageSource = <ImageSource>fromFile(filePath);
    const base64String = img.toBase64String("jpg");
    return base64String;
  }
  
  alert(message: string) {
    return alert({
      title: "APP NAME",
      okButtonText: "OK",
      message: message
    });
  }

}
