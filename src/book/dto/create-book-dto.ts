import { BookCategory } from '../../enums/category';

export class updateBookDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: BookCategory;
}
