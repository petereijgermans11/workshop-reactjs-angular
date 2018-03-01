import {Component, OnInit} from '@angular/core';
import {Book} from '../types/book';
import {AppService} from '../services/app.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'bs-books',
  templateUrl: 'books.template.html',
  styleUrls: ['books.component.css'],
  providers: [AppService]
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]>;
  selectedBook: Book;

  constructor(private bookService: AppService, private router: Router) {
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  add(title: string): void {
    title = title.trim();
    if (!title) {
      return;
    }
    // Call the service here and use the result as your new book list.
    this.books = this.bookService.create(title);
  }

  delete(book: Book): void {
    // Delete the book, and use the result as your new book list.
    this.books = this.bookService.delete(book.id);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  gotoDetail(id: number): void {
    // The router service will help here
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
