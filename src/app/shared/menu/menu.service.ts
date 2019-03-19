import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ScannerConfig } from "../scanner/scanner.config";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  restaurantCatalog: BehaviorSubject<any>;
  constructor() { 
    this.restaurantCatalog = new BehaviorSubject<any>({});
  }

  getMenu(id: String) {
    this.restaurantCatalog.next(ScannerConfig.dummyData);
  }

  getItemDetails(id: number): Observable<any> {
    return of(ScannerConfig.dummyData.filter((item) => item.id === id)[0]);
  }

}
