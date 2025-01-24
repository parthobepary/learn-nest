import { BookCategory } from '../../enums/category';

export class CreateBookDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: BookCategory;
}
