import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../types/books.model';

@Injectable()
export class BooksService {
  constructor(
    private http: HttpClient
  ) { }

  getBooks(): any {
    const url = 'http://localhost:3000/api/v1/books/';
    const bookArrayData =  this.http.get(url)
    const booksArray =  [
            {
              name: "Memory: How To Develop, Train, And Use It", 
              price: 50, 
              description: "All knowledge is but remembrance.?", 
              imageUrl: ["https://m.media-amazon.com/images/I/418iyUMT5tL._SX460_BO1,204,203,200_.jpg", "https://m.media-amazon.com/images/I/418iyUMT5tL._SX460_BO1,204,203,200_.jpg"], 
              author: "William Walker Atkinson"
            },
            {
              name: "You Can", price: 99, 
              description: "Do you often wonder whether you really have it in you to accomplish your goals", 
              imageUrl: ["https://m.media-amazon.com/images/I/4180omRGrSL._SX460_BO1,204,203,200_.jpg", "https://m.media-amazon.com/images/I/4180omRGrSL._SX460_BO1,204,203,200_.jpg"],
              author: "George Matthew Adams (Author)"
            },
            {
              name: "The Adventures of Sherlock Holmes", 
              price: 30, 
              description: "All knowledge is but remembrance.?", 
              imageUrl: ["https://m.media-amazon.com/images/I/41NnjNBdANS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg"], 
              author: "William Walker Atkinson"
            },
            {
              name: "You Can", price: 99, 
              description: "Do you often wonder whether you really have it in you to accomplish your goals", 
              imageUrl: ["https://m.media-amazon.com/images/I/4180omRGrSL._SX460_BO1,204,203,200_.jpg", "https://m.media-amazon.com/images/I/4180omRGrSL._SX460_BO1,204,203,200_.jpg"],
              author: "George Matthew Adams (Author)"
            }
        ]
    // console.log(booksArray, '--booksArray')
    // console.log(bookArrayData, '--bookArrayData')
    return booksArray
  }
}
