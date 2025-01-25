import { BookCategory } from '../../enums/book';
import { Auth } from '../../auth/schemas/auth.schema';
import { IsEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class UpdateBookDto {
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
