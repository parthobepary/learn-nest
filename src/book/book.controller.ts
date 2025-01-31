import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { Query as QueryType } from 'express-serve-static-core';
import { CreateBookDto } from './dto/create-book-dto';
import { UpdateBookDto } from './dto/update-book-dto';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { CacheTTL } from '@nestjs/common/cache';

@UseInterceptors(CacheInterceptor)
@Controller('book')
export class BookController {
  constructor(
    private bookService: BookService,
    private configService: ConfigService,
  ) {}

  @CacheTTL(60 * 1000)
  @CacheKey('books')
  @Get()
  @UseGuards(AuthGuard())
  async findAll(
    @Query()
    query: QueryType,
  ): Promise<Book[]> {
    console.log('inside controller');
    return this.bookService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book | null> {
    return this.bookService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(
    @Body()
    book: CreateBookDto,
    @Req() req: any,
  ): Promise<Book> {
    return this.bookService.createBook(book, req.user);
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
