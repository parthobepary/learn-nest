import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../interface/user';
import { SignupDto } from './dto/signup-dto';
import { LoginDto } from './dto/login-dto';
import { Auth } from './schemas/auth.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('user/:id')
  async validateUser(
    @Param('id')
    id: string,
  ): Promise<User | null> {
    return this.authService.validateUser(id);
  }

  @Post('signup')
  async signUp(
    @Body()
    user: SignupDto,
  ): Promise<User> {
    return this.authService.signUp(user);
  }

  @Post('login')
  async signIn(
    @Body()
    { email, password }: LoginDto,
  ): Promise<User> {
    return this.authService.signIn(email, password);
  }
}
