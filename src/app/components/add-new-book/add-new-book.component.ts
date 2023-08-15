import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, first, map } from 'rxjs';
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
  defaultImage = 'Rich People Problem.svg';
  imageUrl: string | undefined;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  addNewBookForm!: FormGroup;

  ngOnInit(): void {
    this.getAllBooks();

    this.addNewBookForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      bookImage: new FormControl(null, [Validators.required]),
    });
    console.log(this.bookCategory$?.subscribe((res) => console.log(res)));

    // update part
    // this.editBookId = +this.activatedRoute.snapshot.queryParamMap.get('edit')!;
    // if (this.editBookId) {
    //   this.bookService
    //     .getBookById(this.editBookId)
    //     .pipe(first())
    //     .subscribe((editFormValues) => {
    //       console.log('Edit Form : ', editFormValues);
    //       this.addNewBookForm.patchValue(editFormValues);
    //     });
    // }
    // console.log('Add Form : ', this.addNewBookForm.getRawValue());
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
      // avatar: this.addNewBookForm.value.avatar.name,
      bookImage: this.defaultImage,
    };
    console.log('Book Data : ', bookData.avatar);

    // if (bookData) {
    //   const fileName = bookData.avatar;
    //   const filePath = `assets/images/book cover/${fileName}`;
    // }

    this.bookService.createNewBook(bookData).subscribe((response) => {
      console.log(response);
    });
  }

  submitAddNewBook() {
    console.log('Add New Book : ', this.addNewBookForm);
    this.addNewBookForm.reset();
    this.router.navigate(['/']);
    // this.saveBook();
    // this.bookService.getAllBooks().subscribe((res) => console.log(res));
  }

  // private saveBook() {
  //   return this.editBookId
  //     ? this.bookService.updateBookById(
  //         this.editBookId,
  //         this.addNewBookForm.value
  //       )
  //     : this.bookService.createNewBook(this.addNewBookForm.value);
  // }
}
