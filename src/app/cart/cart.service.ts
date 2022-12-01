import { Injectable } from '@angular/core';
import { ResponseService } from '../response/response.service';
import { Book } from '../types/books.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart: Book[] = []
  constructor(
    private response: ResponseService
  ) { }
  add(book: Book){
    this.cart.push(book)
    this.response.showSuccess({ status: "OK", message: 'Added' })
  }
  remove(book: Book){
    this.cart = this.cart.filter(b => b != book);
  }
  get() {   
    return {
      items: this.cart,
      total:  this.cart.length > 0 ? this.cart.map((item) => item.price).reduce((currval : number, preVal: number) =>  currval + preVal) : 0
    }
  }
  cartCount(){
    return this.cart.length
  }
}
