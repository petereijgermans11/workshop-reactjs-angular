import {Component, OnInit} from '@angular/core';
import {Book} from '../types/book';
import {AppService} from '../services/app.service';

@Component({
  styleUrls: ['dashboard.component.css'],
  selector: 'bs-dashboard',
  templateUrl: 'dashboard.template.html'
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: AppService) {
  }

  ngOnInit(): void {
    // Get all the books
    this.bookService.getBooks().subscribe(bks => this.books = bks);
    console.log(this.books);
  }
}
