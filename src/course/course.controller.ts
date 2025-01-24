import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course-dto';
import { UpdateCourseDto } from './dto/update-course-dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id')
    id: string,
  ): Promise<Course | null> {
    return this.courseService.findOne(id);
  }

  @Post()
  async createCourse(
    @Body()
    course: CreateCourseDto,
  ): Promise<Course> {
    return this.courseService.createCourse(course);
  }

  @Put(':id')
  async updateCourse(
    @Param('id')
    id: string,
    @Body()
    course: UpdateCourseDto,
  ): Promise<Course | null> {
    return this.courseService.updateCourse(id, course);
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: string): Promise<Course | null> {
    return this.courseService.deleteCourse(id);
  }
}
