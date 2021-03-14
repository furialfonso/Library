import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Author } from '../dto/author';
import { Book } from '../dto/book';
import { URL_AUTHOR } from '../config/config';
import { URL_EDITORIAL } from '../config/config';
import { URL_BOOK } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private urlEndpoint: string;

  constructor(private httpClient: HttpClient) { }

  getAuthors(): Observable<any> {
    this.urlEndpoint = URL_AUTHOR;
    return this.httpClient.get<any>(this.urlEndpoint + "/todos");
  }

  getEditorials(): Observable<any> {
    this.urlEndpoint = URL_EDITORIAL;
    return this.httpClient.get<any>(this.urlEndpoint + "/todos");
  }

  getBooks(): Observable<any> {
    this.urlEndpoint = URL_BOOK;
    return this.httpClient.get<any>(this.urlEndpoint + "/todos");
  }

  getBook(id: number): Observable<any> {
    this.urlEndpoint = URL_BOOK;
    // return this.httpClient.get<any>(this.urlEndpoint + "/todos");
    return null;
  }

  create(book: Book): Observable<Book> {
    this.urlEndpoint = URL_BOOK;
    return this.httpClient.post(this.urlEndpoint + "/crear", book).pipe(
      map((response: any) => response as Book),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
}
