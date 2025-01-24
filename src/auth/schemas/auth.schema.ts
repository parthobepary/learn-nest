import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../../enums/role';

@Schema({
  timestamps: true,
})
export class Auth {
  @Prop()
  name: string;
  @Prop({ unique: [true, 'Duplicate user find'] })
  email: string;
  @Prop()
  password: string;
  @Prop()
  role: Role;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
