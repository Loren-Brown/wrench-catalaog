import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { WrenchService } from '../../services/wrench-catalog/models/wrench-service.model';

import { NgbdSortableHeaderDirective } from '../../directives/ngbd-sortable-header/ngbd-sortable-header.directive';
import { SortEvent } from '../../directives/ngbd-sortable-header/ngbd-sortable-header.directive';
import { compare } from '../../directives/ngbd-sortable-header/ngbd-sortable-header.directive';

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

  sortedCatalog: WrenchService[];

  serviceError: Object;

  loading: boolean = true;

  @ViewChildren(NgbdSortableHeaderDirective) headers: QueryList<NgbdSortableHeaderDirective>;

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
        this.catalog = this.wrenchCatalogService.correctMissingData(this.catalog);
        this.sortedCatalog = this.catalog;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.serviceError = error;
        this.loading = false;
      }
    );
  }

  addToCart(index) {
    const service = this.catalog[index];
    this.shoppingCartService.addToCart(service);
  }

  // Source: https://ng-bootstrap.github.io/#/components/table/examples
  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting services
    if (direction === '') {
      this.sortedCatalog = this.catalog;
    } else {
      this.sortedCatalog = [...this.catalog].sort((a, b) => {
        let res = undefined;
        if (column === 'price') {
          res = this.wrenchCatalogService.comparePrice(a[column], b[column]);
        } else {
          res = compare(a[column], b[column]);''
        }
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
