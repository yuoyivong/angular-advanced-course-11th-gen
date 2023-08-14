import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-filter-book-by-category',
  templateUrl: './filter-book-by-category.component.html',
  styleUrls: ['./filter-book-by-category.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBookByCategoryComponent implements OnInit, AfterViewChecked {
  filterBooksByCategory: IBook[] = [];
  getCategoryNameByUrl: string | null | undefined;

  constructor(
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((res) => {
      console.log('Response category : ', res.get('categoryName'));
      this.getCategoryNameByUrl = res.get('categoryName');
    });
  }

  ngAfterViewChecked(): void {
    this.getFilterBooksByCategory();
  }

  // get books
  getFilterBooksByCategory() {
    // this.bookService.getAllBooks().subscribe((response) => {
    //   console.log(response);
    //   this.filterBooksByCategory = response;
    // });

    this.bookService
      .getAllBooks()
      .pipe(
        map((bookCategories) =>
          bookCategories.filter(
            (bookCateogry) =>
              bookCateogry.category === this.getCategoryNameByUrl
          )
        )
      )
      .subscribe((res) => (this.filterBooksByCategory = res));
  }

  // set book id through url
  setBookIdViaUrl(bookId: number) {
    this.router.navigate(['/books', bookId]);
  }
}
