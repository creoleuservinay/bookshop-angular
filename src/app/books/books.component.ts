import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../types/books.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {
  isShowing = true
  books: Book[] = []
  
  constructor(private bookService: BooksService) { }
  manageBook(operation: boolean){
    this.isShowing = operation
  }
  addToCart(book: any){
    console.log(book)
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks()
  }
  ngOnDestroy(): void {
    console.log('Here bookd ngOnDestroy')
  }
}
