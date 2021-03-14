import { Book } from './book';

export class Editorial {
  id: number;
  name: string;
  address: string;
  phone: string;
  maximumBooks: number;
  books: Array<Book> = [];
}
