import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { ReadBookDetailsComponent } from './components/read-book-details/read-book-details.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AllBooksService } from './services/all-books.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterBookByCategoryComponent } from './components/filter-book-by-category/filter-book-by-category.component';
import { SearchPipe } from './pipes/search.pipe';
import { EmailValidationDirective } from './directives/email-validation.directive';
import { PasswordValidationDirective } from './directives/password-validation.directive';
import { DeleteBookPopupComponent } from './components/delete-book-popup/delete-book-popup.component';
import { EditBookPopupComponent } from './components/edit-book-popup/edit-book-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LogInComponent,
    NavbarComponent,
    BooksComponent,
    PageNotFoundComponent,
    FooterComponent,
    AddNewBookComponent,
    ReadBookDetailsComponent,
    FilterBookByCategoryComponent,
    SearchPipe,
    EmailValidationDirective,
    PasswordValidationDirective,
    DeleteBookPopupComponent,
    EditBookPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AllBooksService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
