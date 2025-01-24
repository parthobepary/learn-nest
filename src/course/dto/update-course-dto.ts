import { CourseCategory } from '../../enums/course';

export class UpdateCourseDto {
  readonly title: string;
  readonly description: string;
  readonly author: string;
  readonly price: number;
  readonly category: CourseCategory;
}