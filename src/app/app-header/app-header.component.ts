import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(
    private authService :AuthService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated
  }
  
  logout(){
    this.authService.logout()
  }

  cartCount(){
    return this.cartService.cartCount()
  }

}
