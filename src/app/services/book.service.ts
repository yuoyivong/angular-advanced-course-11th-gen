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
}
