import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { MainComponent } from './components/main/main.component';
import { SortPipe } from './pipes/sort.pipe';
import { IfLoginDirective } from './directives/if-login.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    MainComponent,
    SortPipe,
    IfLoginDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
