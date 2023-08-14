import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-read-book-details',
  templateUrl: './read-book-details.component.html',
  styleUrls: ['./read-book-details.component.css'],
})
export class ReadBookDetailsComponent implements OnInit {
  allBooks: IBook[] = [];
  bookId: number | undefined | null;
  tempBook!: IBook;

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((response) => {
      console.log('Response : ', response);
      this.allBooks = response;
      console.log('All books : ', this.allBooks);
    });
    // this.getBookIdViaUrl();
    this.bookId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log('Book id : ', this.bookId);
    this.viewBookById();
  }

  // get book by id
  viewBookById() {
    this.bookService.getBookById(this.bookId).subscribe((res) => {
      console.log('Res : ', res);
      this.tempBook = res;
    });
  }
  // getBookIdViaUrl() {
  //   this.activatedRoute.paramMap.subscribe((getId) => {
  //     this.bookId = +getId.get('id')!;
  //   });

  //   for (let book of this.allBooks) {
  //     if (this.bookId === book.id) {
  //       console.log('Book id : ', this.bookId);

  //       console.log('Book idgfdsgfsd : ', book.id);
  //       this.tempBook = book;
  //     }
  //   }
  // }

  // go to home page
  goToHomepage() {
    this.router.navigate(['/']);
  }
}
