import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ScannerConfig } from "../scanner/scanner.config";

import AppConfig from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu;
  restaurantCatalog: BehaviorSubject<any>;
  constructor(private http: HttpClient) { 
    this.restaurantCatalog = new BehaviorSubject<any>({});
  }

  getMenu(id) {
    id = 5
    this.http.get(AppConfig.baseUrl + `api/merchants/${id}/menu/`)
    .subscribe((menu) => {
      this.menu = menu
      this.restaurantCatalog.next(menu);
    })
    //this.restaurantCatalog.next(ScannerConfig.dummyData);
  }

  getItemDetails(id: number): Observable<any> {
    //return of(ScannerConfig.dummyData.filter((item) => item.id === id)[0]);
    return of(this.menu.filter((item) => item.itemId === id)[0]);
  }

}
