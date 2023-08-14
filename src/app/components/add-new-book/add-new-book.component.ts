import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  bookCategory$: Observable<string[]> | undefined;
  defaultImage = '../../../assets/images/Group 7582.svg';
  imageUrl: string | undefined;

  constructor(private bookService: BookService, private router: Router) {}

  addNewBookForm!: FormGroup;

  ngOnInit(): void {
    this.getAllBooks();

    this.addNewBookForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.email]),
      author: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      avatar: new FormControl(null, [Validators.required]),
    });
    console.log(this.bookCategory$?.subscribe((res) => console.log(res)));
  }

  // image preview
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.addNewBookForm.patchValue({
      avatar: file,
    });
    this.addNewBookForm.get('avatar')?.updateValueAndValidity();

    // file preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    if (file) {
      console.log('File : ', file.name);
      reader.readAsDataURL(file);
    }
  }

  onImgError(event: any) {
    event.target.src = this.defaultImage;
  }

  // get all books
  getAllBooks() {
    // first way
    // this.bookService.getAllBooks().subscribe((res) => (this.allBooks = res));

    // second way - using pipe and map operators
    this.bookCategory$ = this.bookService
      .getAllBooks()
      .pipe(map((books) => books.map((book) => book.category)));
  }

  // create new book
  createBook() {
    const bookData = {
      ...this.addNewBookForm.value,
      avatar: this.addNewBookForm.value.avatar.name,
    };
    console.log('Book Data : ', bookData.avatar);

    if (bookData) {
      const fileName = bookData.avatar;
      const filePath = `assets/images/book cover/${fileName}`;
    }

    this.bookService.createNewBook(bookData).subscribe((response) => {
      console.log(response);
    });
  }

  submitAddNewBook() {
    console.log('Add New Book : ', this.addNewBookForm);
    this.addNewBookForm.reset();
    this.router.navigate(['/']);
  }
}
