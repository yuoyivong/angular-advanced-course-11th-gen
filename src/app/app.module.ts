import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { ReadBookDetailsComponent } from './components/read-book-details/read-book-details.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AllBooksService } from './services/all-books.service';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AllBooksService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
