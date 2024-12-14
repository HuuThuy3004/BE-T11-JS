import { Injectable } from '@nestjs/common';
import { Books } from 'src/interface/book.interface';

@Injectable()
export class BooksService {
  private books: Books[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      description: 'Book 1 description',
      pubilishYear: 2021,
      createdAt: new Date(2001, 1, 1),
      updateddAt: new Date(2001, 1, 1),
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      description: 'Book 2 description',
      pubilishYear: 2022,
      createdAt: new Date(2002, 2, 2),
      updateddAt: new Date(2002, 2, 2),
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      description: 'Book 3 description',
      pubilishYear: 2023,
      createdAt: new Date(2003, 3, 3),
      updateddAt: new Date(2003, 3, 3),
    },
  ];

  // Get All Books
  getAllBooks(): Books[] {
    return this.books;
  }
  // Add New Book
  addBook(book: Books): any {
    const bookExists = this.books.some((b) => b.id === book.id);
    return bookExists
      ? { message: 'Book id already exist' }
      : this.books.push(book);
  }
  // Update Book
  updateBook(id: number, book: Books): any {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) {
      return { message: 'Book not found' };
    }
    this.books[bookIndex] = {...this.books[bookIndex], ...book, id: this.books[bookIndex].id};
    this.books[bookIndex].updateddAt = new Date();
    return this.books[bookIndex];
  }
  // Delete Book
  deleteBook(id: number): any {
    const bookIndex = this.books.findIndex((b) => b.id === id);
    if (bookIndex === -1) {
      return { message: 'Book not found' };
    }
    this.books.splice(bookIndex, 1);
    return { message: 'Book deleted successfully' };
  }

}
