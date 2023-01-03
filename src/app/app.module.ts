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
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";
import { Interceptor } from "./interceptors/interceptor";
import { ApiHttpService } from "./http-service/httpService";

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppFooterComponent, CartComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BooksModule, AppRoutingModule, AuthModule, 
    ToastrModule.forRoot(),
    BrowserAnimationsModule, // ToastrModule added
  ],
  providers: [
    AuthService,
    ApiHttpService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}