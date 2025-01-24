import { BookCategory } from '../../enums/book';

export class updateBookDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: BookCategory;
}
