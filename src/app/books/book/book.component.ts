import { OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Books } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Books = {} as Books;
  @Output() newItemEvent = new EventEmitter<string>();
  // @Output() emitBook = new EventEmitter<Books>();
  constructor(private cartService: CartService) {}

  inCart: boolean = false;
  addToCart() {
    this.cartService.add(this.book);
    this.inCart = true;
  }
  removeFromCart() {
    this.inCart = false;
    this.cartService.remove(this.book);
  }
}
