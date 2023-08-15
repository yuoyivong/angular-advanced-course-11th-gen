import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

type bookType = {
  id: number | null;
  title: string;
  author: string;
  description: string;
  bookImage: string;
};

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  allGenresBooks: IBook[] = [];
  getCategoryName: string | undefined | null;

  // categoryBookList$: Observable<string[]> | null | undefined;
  categoryBookList$: string[] = [];

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
    this.bookService
      .getAllBooks()
      .pipe(map((books: IBook[]) => books.map((book) => book.category)))
      .subscribe((res) => (this.categoryBookList$ = res));
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

  editBook: bookType | IBook = {
    id: null,
    title: '',
    author: '',
    description: '',
    bookImage: '',
  };

  isEditPopup: boolean = false;

  // setIsEditPopup(id: number) {
  //   this.editBookId = id;
  //   this.isEditPopup = true;

  //   this.bookService.getBookById(this.editBookId).subscribe((res) => {
  //     this.editBook = res;
  //     console.log(this.editBook);
  //   });
  // }

  // edit product
  setIsEditPopup(book: IBook) {
    this.isEditPopup = true;
    this.editBook.title = book.title;
    this.editBook.author = book.author;
    this.editBook.description = book.description;
    this.editBook.bookImage = book.bookImage;

    if (book.id !== null) {
      this.editBook.id = book.id;
    }
    // this.edit = false;
    // this.add = true;
  }

  // get books
  getBooks() {
    this.bookService.getAllBooks().subscribe((response) => {
      console.log(response);
      this.allGenresBooks = response;
    });
  }

  // set book id for updating in url using query param
  // handleEditBook() {
  //   this.bookService
  //     .updateBookById(this.editBookId, this.editBookForm.value)
  //     .subscribe();
  //   this.isEditPopup = false;
  //   console.log(this.editBookForm);
  //   this.getBooks();
  // }

  // update product
  handleEditBook() {
    this.isEditPopup = false;
    this.bookService
      .updateBookById(this.editBook)
      .subscribe((response) => console.log(response));
    this.getBooks();
  }

  // remove book by id
  removeBook(book: IBook) {
    if (book.id !== null) {
      this.bookService
        .deleteBookById(book.id)
        .subscribe((response) => console.log(response));
    }
    this.getBooks();
  }
}
