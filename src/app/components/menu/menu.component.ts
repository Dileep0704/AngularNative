import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs/operators';
import { ScannerService } from '../../shared/scanner/scanner.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  restaurantCatalog: any[];
  constructor(private scannerService:ScannerService) { }

  ngOnInit() {
    this.scannerService.restaurantCatalog.pipe(skip(1)).subscribe((menu)=> {
      this.restaurantCatalog = menu
    })
  }

}
