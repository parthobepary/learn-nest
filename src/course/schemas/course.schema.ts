import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CourseCategory } from '../../enums/course';

@Schema({
  timestamps: true,
})
export class Course {
  @Prop({
    required: true,
  })
  title: string;
  @Prop()
  description: string;
  @Prop()
  author: string;
  @Prop()
  price: number;
  @Prop()
  category: CourseCategory;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
