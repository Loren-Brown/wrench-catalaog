import { Component, OnInit } from '@angular/core';

import { WrenchService } from '../../services/wrench-catalog/models/wrench-service.model';

import { WrenchCatalogService } from '../../services/wrench-catalog/wrench-catalog.service';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(
    private wrenchCatalogService: WrenchCatalogService,
    private shoppingCartService: ShoppingCartService
  ) { }

  catalog: WrenchService[];

  serviceError: Object;

  catagories: string[];

  activeCategory: string;

  ngOnInit() {
    this.catalog = [];
    //this.serviceError = "test error";
    this.updateCatalog();
  }

  updateCatalog() {
    this.wrenchCatalogService.GetCatalog()
    .subscribe(
      response => {
        console.log(response);
        this.catalog = response.catalog;
      },
      error => {
        console.log(error);
        this.serviceError = error;
      }
    );
  }

  addToCart(index) {
    const service = this.catalog[index];
    this.shoppingCartService.addToCart(service);
  }
}
