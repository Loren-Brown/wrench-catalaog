import { Component, OnInit } from '@angular/core';

import { WrenchService } from '../../services/wrench-catalog/models/wrench-service.model';

import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: WrenchService[];

  total: number;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.total = 0.00;
    this.updateCart();
    this.shoppingCartService.events$.forEach(event => this.updateCart());
  }

  removeFromCart(index: number) {
    this.shoppingCartService.removeFromCart(index);
    this.cart = this.shoppingCartService.getCart();
  }

  emptyCart() {
    this.shoppingCartService.emptyCart();
    this.cart = this.shoppingCartService.getCart();
  }

  updateCart() {
    this.cart = this.shoppingCartService.getCart();
    this.total = this.shoppingCartService.getTotal();
  }
}
