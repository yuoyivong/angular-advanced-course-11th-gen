import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  allGenresBooks: IBook[] = [];
  getCategoryName: string | undefined | null;

  categoryBookList$!: Observable<string[]>;

  searchCategory = new FormControl();

  constructor(
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  goToAddNewBook() {
    this.router.navigate(['/addNewBook']);
  }

  ngOnInit(): void {
    this.getBookCategory();
    this.getAllBookByGenres();

    this.activatedRoute.queryParamMap.subscribe((res) => {
      console.log('Response category : ', res.get('categoryName'));
      this.getCategoryName = res.get('categoryName');
    });
  }

  // get only book category
  getBookCategory() {
    this.categoryBookList$ = this.bookService
      .getAllBooks()
      .pipe(map((books: IBook[]) => books.map((book) => book.category)));
  }

  // set book id through url
  setBookIdViaUrl(bookId: number) {
    this.router.navigate(['/books', bookId]);
  }

  getAllBookByGenres() {
    this.bookService.getAllBooks().subscribe((response) => {
      console.log(response);
      this.allGenresBooks = response;
    });
  }
}
