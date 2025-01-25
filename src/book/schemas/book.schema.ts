import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BookCategory } from '../../enums/book';
import { Auth } from '../../auth/schemas/auth.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  author: string;
  @Prop()
  category: BookCategory;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Auth' })
  user: Auth;
}

export const BookSchema = SchemaFactory.createForClass(Book);
