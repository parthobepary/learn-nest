import {
  IsByteLength,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Role } from '../../enums/role';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @IsByteLength(6, 20)
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  readonly role: Role;
}
