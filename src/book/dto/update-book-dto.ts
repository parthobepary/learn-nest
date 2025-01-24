import { BookCategory } from '../../enums/book';

export class UpdateBookDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: BookCategory;
}
