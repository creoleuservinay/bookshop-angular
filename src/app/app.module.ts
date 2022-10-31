import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent, CartComponent],
  imports: [BrowserModule, FormsModule, BooksModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}