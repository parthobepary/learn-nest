import { CourseCategory } from '../../enums/course';

export class CreateCourseDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: CourseCategory;
}
