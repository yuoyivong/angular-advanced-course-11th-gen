import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}

  allBooks: IBook[] = [];

  ngOnInit(): void {
    this.getBooks();
  }
  
  // get books
  getBooks() {
    this.bookService.getAllBooks().subscribe((response) => {
      console.log(response);
      this.allBooks = response;
    });
  }

  // set book id through url
  setBookIdViaUrl(bookId: number) {
    this.router.navigate(['/books', bookId]);
  }
}
