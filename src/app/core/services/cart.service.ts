import { Injectable } from '@angular/core';
import { Product } from 'src/app/products.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCard( product: Product ){

    // this.products.push(product);
    this.products = [...this.products , product];
    this.cart.next(this.products);
  }
}
