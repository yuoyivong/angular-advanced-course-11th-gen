import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../models/book';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'api/books/';
  constructor(private http: HttpClient) {}

  // get all books from mock api
  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.booksUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.log('Error : ', error);
        return throwError(() => error);
      })
    );
  }

  // get book by id
  getBookById(id: number | undefined | null): Observable<IBook> {
    return this.http.get<IBook>(this.booksUrl + id);
  }

  // add new book
  createNewBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.booksUrl, book).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  // delete book
  deleteBookById(id: number): Observable<number> {
    return this.http.delete<number>(this.booksUrl + id);
  }

  // update book by id
  updateBookById(book: any): Observable<any> {
    return this.http.put(this.booksUrl + book.id, book);
  }
  // updateBookById(id: number, book: IBook): Observable<any> {
  //   console.log('Book id : ', id);
  //   return this.http.put(this.booksUrl + id, book);
  // }
}
