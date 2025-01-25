import { BookCategory } from '../../enums/book';
import { IsEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Auth } from '../../auth/schemas/auth.schema';

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

  @IsEmpty()
  readonly user: Auth;
}
