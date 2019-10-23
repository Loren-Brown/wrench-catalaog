import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';

import { WrenchService } from '../../services/wrench-catalog/models/wrench-service.model';

const STORAGE_KEY = 'wrench-shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  private _subject = new Subject<any>();

  public get events$ () {
     // Provide event subscription
    return this._subject.asObservable();
  }

  public addToCart(wrenchService: WrenchService): void {
    // get cart array from local storage
    const cart: WrenchService[] = this.storage.get(STORAGE_KEY) || [];

    // push new service to cart
    cart.push(wrenchService);

    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, cart);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');

    // publish event
    this._subject.next('addToCart');
  }

  public emptyCart(): void {
    // create empty cart
    const cart = [];

    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, cart);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');

    // publish event
    this._subject.next('emptyCart');
  }

  public removeFromCart(index: number): void {
    // get cart array from local storage
    const cart: WrenchService[] = this.storage.get(STORAGE_KEY) || [];

    // remove item from cart at index
    if (index < cart.length && index >= 0) {
      cart.splice(index, 1);
    } 

    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, cart);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');

    // publish event
    this._subject.next('removeFromCart');
  }

  public getCart(): WrenchService[] {
    const cart: WrenchService[] = this.storage.get(STORAGE_KEY) || [];

    return cart;
  }

  public getTotal(): number {
    const cart: WrenchService[] = this.storage.get(STORAGE_KEY) || [];
    let total = 0;

    for(var entry of cart) {
      let price = parseFloat(entry.price);
      if (!isNaN(price)) {
        total += price;
      }
    }

    return total;
  }

  public bookNow() {
    // publish event
    this._subject.next('bookNow');
  }
}
