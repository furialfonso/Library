import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../library.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../../dto/book';
import { Author } from '../../../dto/author';
import { Editorial } from '../../../dto/editorial';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public book: Book = new Book();
  authors: Author[];
  editorials: Editorial[];
  errores: string[];
  titulo: string = 'Nuevo libro';

  constructor(private libraryService: LibraryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadBook();
    this.loadAuthors();
    this.loadEditorials();
  }

  loadBook(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.libraryService.getBook(id).subscribe((book) => this.book = book);
      }
    });
  }

  loadAuthors(): void {
    this.libraryService.getAuthors().subscribe(authors => this.authors = authors);
  }

  loadEditorials(): void {
    this.libraryService.getEditorials().subscribe(editorials => this.editorials = editorials);
  }

  public create(): void {
    this.libraryService.create(this.book)
      .subscribe(book => {
        this.router.navigate(['/book'])
        swal.fire("Nuevo libro", "El libro " + (book.title) + " ha sido creado con exito!", "success")
      },
        err => {
          this.errores = err.error.errors as string[];
          console.error("Código del error desde el backend:" + err.status);
          console.error(err.error.errors);
        });
  }

  compareAuthor(author1: Author, author2: Author): boolean {
    if (author1 === undefined && author2 === undefined) {
      return true;
    }
    return (author1 == null || author2 == null) ? false : (author1.id === author2.id);
  }

  compareEditorial(editorial1: Editorial, editorial2: Editorial): boolean {
    if (editorial1 === undefined && editorial2 === undefined) {
      return true;
    }
    return (editorial1 == null || editorial2 == null) ? false : (editorial1.id === editorial2.id);
  }
}
