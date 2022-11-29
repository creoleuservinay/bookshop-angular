import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../types/books.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BooksComponent implements OnInit, OnDestroy {
  isShowing = true
  books: Book[] = []
  constructor(private bookService: BooksService) { }
  getBookList(){
    return this.bookService.getBooks()
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('Here bookd ngOnDestroy')
  }
}
