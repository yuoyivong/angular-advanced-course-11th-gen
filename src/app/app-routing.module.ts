import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReadBookDetailsComponent } from './components/read-book-details/read-book-details.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { FilterBookByCategoryComponent } from './components/filter-book-by-category/filter-book-by-category.component';
import { AuthGuardService } from './services/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'books',
        component: BooksComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: 'filterBookCategory',
            component: FilterBookByCategoryComponent,
          },
        ],
      },
      {
        path: 'books/:id',
        component: ReadBookDetailsComponent,
      },
      {
        path: 'logIn',
        component: LogInComponent,
      },
      {
        path: 'addNewBook',
        component: AddNewBookComponent,
      },
    ],
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
