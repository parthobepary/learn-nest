import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BookCategory } from '../../enums/category';

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
}

export const BookSchema = SchemaFactory.createForClass(Book);
