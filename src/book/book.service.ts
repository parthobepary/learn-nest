import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { Query } from 'express-serve-static-core';
import { Auth } from '../auth/schemas/auth.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(query: Query): Promise<Book[]> {
    const keyword = query.search
      ? { title: { $regex: query.search, $options: 'i' } }
      : {};
    const perPage = query.perPage ? Number(query.perPage) : 10;
    const currentPage = query.page ? Number(query.page) : 1;
    const skip = (currentPage - 1) * perPage;

    return this.bookModel
      .find({ ...keyword })
      .limit(perPage)
      .skip(skip)
      .populate('user', 'name email')
      .exec();
  }

  async findOne(id: string): Promise<Book | null> {
    const book = await this.bookModel
      .findById(id)
      .populate('user', 'name email role')
      .exec();
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async createBook(book: Book, user: Auth): Promise<Book> {
    const data = Object.assign(book, { user: user._id });
    return await this.bookModel.create(book);
  }

  async updateBook(id: string, book: Book): Promise<Book | null> {
    return this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  async deleteBook(id: string): Promise<Book | null> {
    return this.bookModel.findByIdAndDelete(id);
  }
}
