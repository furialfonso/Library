import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from '../../dto/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: Book[];
  title: String = 'LIBROS';
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getBooks().subscribe(
      (response) => {
        this.books = response;
      }
    );
  }

}
