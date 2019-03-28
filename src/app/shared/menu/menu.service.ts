import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ImageSource, fromFile } from "tns-core-modules/image-source";
import { alert } from "tns-core-modules/ui/dialogs";
import { ScannerConfig } from "../scanner/scanner.config";
import { Product } from '../../model/product.model';

import AppConfig from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Product[];
  restaurantCatalog: BehaviorSubject<Product[]>;
  constructor(private http: HttpClient) { 
    this.restaurantCatalog = new BehaviorSubject<Product[]>([]);
  }

  getMenu(id) {
    id=2
    this.http.get(AppConfig.baseUrl + `api/merchants/${id}/menu/`)
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
    var id=2
    menuItem.imageUrl = this.convertImgToBase64(menuItem.imageUrl)
    this.http.post(AppConfig.baseUrl + `api/merchants/${id}/menu/create`,menuItem)
    .subscribe(() => {
      this.alert("Item Created Successfully");
    },
    error => {
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
