import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { Query as QueryType } from 'express-serve-static-core';
import { CreateBookDto } from './dto/create-book-dto';
import { UpdateBookDto } from './dto/update-book-dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async findAll(
    @Query()
    query: QueryType,
  ): Promise<Book[]> {
    return this.bookService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book | null> {
    return this.bookService.findOne(id);
  }

  @Post()
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.createBook(book);
  }

  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Book | null> {
    return this.bookService.updateBook(id, book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book | null> {
    return this.bookService.deleteBook(id);
  }
}
