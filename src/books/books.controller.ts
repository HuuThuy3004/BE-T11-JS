import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from 'src/interface/book.interface';

@Controller('/api/')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Get all books
  @Get('/books')
  getAllBooks() {
    return this.booksService.getAllBooks();
  }
  // Get detail a book
  @Get('/books/detail/:id')
  getDetailBook(@Param('id') id: string) {
    return this.booksService.getDetailBook(+id);
  }

  // Add a new book
  @Post('/books/add')
  addBook(@Body() book: Books) {
    return this.booksService.addBook(book)
  }

  // Update a book
  @Patch('/books/update/:id')
  updateBook(@Param('id') id: number, @Body() updateBook: Books) {
    return this.booksService.updateBook(+id, updateBook);
  }

  // Delete a book
  @Delete('/books/delete/:id')
  deleteBook(@Param('id') id: number) {
    return this.booksService.deleteBook(+id);
  }
}
