import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './schemas/auth.schema';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '../interface/user';
import { SignupDto } from './dto/signup-dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private authModel: mongoose.Model<Auth>,
    private jwtService: JwtService,
  ) {}

  async signUp(CreateAuthDto: SignupDto): Promise<User> {
    const { name, email, password, role } = CreateAuthDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await this.authModel.create({
        name,
        email,
        password: hashedPassword,
        role,
      });
      const token = this.jwtService.sign({ id: user._id });
      return { user, token };
    } catch (error) {
      throw new UnprocessableEntityException('Email already exists');
    }
  }

  async signIn(email: string, password: string): Promise<User> {
    const user = await this.authModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const token = this.jwtService.sign({ id: user._id });
    return { user, token };
  }

  async validateUser(user: Auth): Promise<User | null> {
    const exist = mongoose.isValidObjectId(user._id);
    if (!exist) {
      throw new UnauthorizedException('Invalid user');
    }
    return { user };
  }
}
