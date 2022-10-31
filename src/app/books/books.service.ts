import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
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
            },
        ]
  }
}
