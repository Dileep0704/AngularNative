import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../shared/menu/menu.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item: any;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.getItemDetails();
  }

  getItemDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.menuService.getItemDetails(id)
      .subscribe(item => this.item = item);
  }

}
