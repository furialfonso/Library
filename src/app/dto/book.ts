import { Author } from './author';
import { Editorial } from './editorial';
export class Book {
  id: number;
  title: string;
  year: string;
  gender: string;
  numPages: number;
  author: Author;
  editorial: Editorial;
}
