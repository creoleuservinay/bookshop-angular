import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ResponseService } from '../response/response.service';
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
  public planType = 'gold';
  public discount = '';
  books: Book[] = []
  constructor(
    private bookService: BooksService,
    private response: ResponseService) { }
  getBooks(){
      const booksApi = this.bookService.getBooks()
      return booksApi
      // booksApi.subscribe(
      //   (data: any) => {
      //     let books = data['books']
      //     if( books ){
      //       return books
      //         this.response.showSuccess({ status: "OK", message: 'Data found' })
      //     } else {
      //       this.response.showError({ status: "FAIL", message: 'No record found' })
      //     }
      // })
}

  ngOnInit(): void {
    this.getBooks()
  }
  ngOnDestroy(): void {
    console.log('Here bookd ngOnDestroy')
  }
}
