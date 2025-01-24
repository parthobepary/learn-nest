import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Course } from './schemas/course.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private courseModel: mongoose.Model<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.courseModel.findById(id).exec();
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  async createCourse(course: Course): Promise<Course> {
    return await this.courseModel.create(course);
  }

  async updateCourse(id: string, course: Course): Promise<Course | null> {
    return this.courseModel.findByIdAndUpdate(id, course, {
      new: true,
      runValidators: true,
    });
  }

  async deleteCourse(id: string): Promise<Course | null> {
    return this.courseModel.findByIdAndDelete(id);
  }
}
