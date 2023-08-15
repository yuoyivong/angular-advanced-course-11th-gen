import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  editBookId!: number;
  @Input() isDeletePopup: boolean = false;

  setIsDeletePopup(id: number) {
    this.router.navigate(['', id]);
    this.isDeletePopup = true;
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

  constructor(private bookService: BookService, private router: Router) {}
  editBookForm!: FormGroup;

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

  ngDoCheck() {
    console.log(this.editBookForm);
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
