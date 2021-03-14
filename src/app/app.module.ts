import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { EditorialComponent } from './components/editorial/editorial.component';
import { BookComponent } from './components/book/book.component';
import { LibraryService } from './components/library.service';
import { DetailComponent } from './components/book/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    EditorialComponent,
    BookComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
