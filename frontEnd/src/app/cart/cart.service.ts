import { Injectable } from '@angular/core';
import { BookComponent } from '../books/book/book.component';
import { Books } from '../types/book';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  remove(book: Books) {
    this.cart = this.cart.filter((b) => b != book);
  }
  getCart() {
    return this.cart;
  }
  constructor() {}
  cart: Books[] = [];
  add(book: Books) {
    this.cart.push(book);
  }
}
