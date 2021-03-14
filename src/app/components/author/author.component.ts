import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Author } from '../../dto/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public authors: Author[];
  title:String = 'AUTORES';
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.getAuthors().subscribe(
      (response) => {
        this.authors = response;
      }
    );
  }

}
