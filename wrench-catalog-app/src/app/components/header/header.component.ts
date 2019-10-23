import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

import { WrenchService } from '../../services/wrench-catalog/models/wrench-service.model';


import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalOptions: NgbModalOptions;

  cart: WrenchService[];

  constructor(
      private shoppingCartService: ShoppingCartService,
      private modalService: NgbModal
    ) { 
      this.modalOptions = {
        backdrop:'static',
        backdropClass:'customBackdrop',
        size: 'lg'
      }
    }

  ngOnInit() {
    this.updateCart();
    this.shoppingCartService.events$.forEach(event => this.updateCart());
  }

  bookNow() {
    this.shoppingCartService.bookNow();
    this.modalService.open(CheckoutComponent, this.modalOptions);
  }

  updateCart() {
    this.cart = this.shoppingCartService.getCart();
  }
}
