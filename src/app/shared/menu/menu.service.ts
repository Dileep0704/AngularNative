import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ScannerConfig } from "../scanner/scanner.config";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItemDetails(id: number): Observable<any> {
    return of(ScannerConfig.dummyData.filter((item) => item.id === id)[0]);
  }
}
