import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { WrenchService } from '../../services/wrench-catalog/models/wrench-service.model';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  cart: WrenchService[];

  total: number;

  constructor(
    public activeModal: NgbActiveModal,
    private shoppingCartService: ShoppingCartService
  ) {}
 
  ngOnInit() {
    this.cart = this.shoppingCartService.getCart();
    this.total = this.shoppingCartService.getTotal();
  }

}
