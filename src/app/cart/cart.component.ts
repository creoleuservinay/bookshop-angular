import { Component, OnInit } from '@angular/core';
import { Book } from '../types/books.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  
  cartItems() {
    return this.cartService.get()
  }

  removeFromCart(cartItem: Book) {
    this.cartService.remove(cartItem)
  }

  ngOnInit(): void {
  }

}
