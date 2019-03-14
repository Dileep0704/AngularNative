import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScannerConfig } from "./scanner.config";

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  restaurantCatalog: BehaviorSubject<any>;
  constructor() { 
    this.restaurantCatalog = new BehaviorSubject<any>({});
  }

  getMenu(id: String) {
    this.restaurantCatalog.next(ScannerConfig.dummyData);
  }
}
