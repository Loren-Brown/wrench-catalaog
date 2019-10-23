import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalOptions: NgbModalOptions;

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
  }

  bookNow() {
    this.shoppingCartService.bookNow();
    this.modalService.open(CheckoutComponent, this.modalOptions);
  }
}
