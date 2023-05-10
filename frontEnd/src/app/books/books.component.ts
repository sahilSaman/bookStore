import { Component } from '@angular/core';
import { Books } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css'],
})
export class BooksComponent {
  books: Books[] = [];
  constructor(private booksService: BooksService) {
    this.books = booksService.getBooks();
  }

  isShowing = false;
}
