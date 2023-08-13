import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css'],
})
export class AddNewBookComponent implements OnInit {
  allBooks: IBook[] = [];

  bookCategory: Observable<string> | undefined;

  constructor(private bookService: BookService) {}

  addNewBookForm!: FormGroup;

  ngOnInit(): void {
    this.getAllBooks();

    this.addNewBookForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.email]),
      author: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  getAllBooks() {
    // this.bookService
    //   .getAllBooks()
    //   .pipe(
    //     map((books: IBook[]) =>
    //       books.map((book) => console.log('Book category : ', book))
    //     )
    //   );
    this.bookCategory = this.bookService.getAllBooks().pipe(
      map((book: any) => {
        console.log(book);
        return book.category;
      })
    );
  }

  submitAddNewBook() {
    console.log('Add New Book : ', this.addNewBookForm);
  }
}
