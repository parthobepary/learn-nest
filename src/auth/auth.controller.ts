import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../interface/user';
import { SignupDto } from './dto/signup-dto';
import { LoginDto } from './dto/login-dto';
import { Auth } from './schemas/auth.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('user')
  @UseGuards(AuthGuard())
  async validateUser(
    @Req()
    req: any,
  ): Promise<User | null> {
    return this.authService.validateUser(req.user);
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
