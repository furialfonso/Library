import { Book } from './book';

export class Author {
  id: number;
  name: string;
  birthDate: string;
  cityOrigin: string;
  email: string;
  books: Array<Book> = [];
}
