import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/books.model';
import { BooksService } from '../books.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() booksingle: Book = {} as Book
  isInCart = false
  constructor(
    private cartService: CartService
    ) { }
   @Output() bookEmitter = new EventEmitter<Book>();

  addToCart(){
    console.log('Add to cart component!!!!', this.booksingle);
    this.isInCart = true
    this.cartService.add(this.booksingle)
  }

  removeFromCart() {
    this.isInCart = false
    this.cartService.remove(this.booksingle)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
