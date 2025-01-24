import { BookCategory } from '../../enums/book';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  readonly description: string;
  readonly author: string;
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(BookCategory)
  readonly category: BookCategory;
}
