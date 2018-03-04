
# Workshop ReactJS and Angular
Hey guys, tonight you'll have to build this app:

![Bookstore gif](https://i.imgur.com/iD69CC9.gif)

Using either react or angular, choose your weapon ⚔
## Getting started
```bash
git clone https://github.com/petereijgermans11/workshop-reactjs-angular.git

# If you'd rather use Angular
cd ./angular
npm install -g @angular/cli
npm install
ng serve --open

Development Server is running on http://localhost:4200

# Extra install:
npm install ipaddr.js


# Happy hacking ! ;-)
```

## Todo:
- Fix all the bugs before building new features


# ERROR 1:

Uncaught Error: Component AppComponent is not part of any NgModule 
or the module has not been imported into your module

**Solution:**

Add the following in @NgModule in the ‘declarations-section’:

```
@NgModule({
declarations: [
    AppComponent,
```


———————————

# ERROR 2:

Uncaught Error: Template parse errors:
'router-outlet' is not a known element:
1. If 'router-outlet' is an Angular component, then verify that it is part of this module.
2. If 'router-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("
  <a routerLink="/books">Books</a>
</nav>
[ERROR ->]<router-outlet></router-outlet>
<app-messages></app-messages>
"): ng:///AppModule/AppComponent.html@5:0
    at syntaxError (compiler.js:466)

**Solution:**

Add the following in @NgModule in the ‘imports-section’:

```
@NgModule({
  imports: [
    AppRoutingModule,
```

———--------

# ERROR 3:

Uncaught Error: Template parse errors:
Can't bind to 'ngForIn' since it isn't a known property of 'li'. ("

<ul class="books">
  <li [ERROR ->]*ngFor="let book in books">
    <a routerLink="/detail/{{book.id}}">
      <span class="badge">{{book"): ng:///AppModule/BooksComponent.html@13:6
Property binding ngForIn not used by any directive on an embedded template. Make sure that the property name is spelled correctly and all directives are listed in the "@NgModule.declarations". ("

**Solution:**

Change the following in the ‘books.component.html’:

```
Wrong:
li *ngFor="let book in books | async"

Right:
li *ngFor="let book of books | async"
```

———————————

# ERROR 4:

ERROR Error: Uncaught (in promise): Error: StaticInjectorError[HttpClient]: 
  StaticInjectorError[HttpClient]: 
    NullInjectorError: No provider for HttpClient!

**Solution:**

Add the following in the ‘imports-section’:

```
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
```

————

# ERROR 5:

The books are not shown on the page!

**Solution:**

In the book.service.ts —> implement the method getBooks()


    getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        tap(books => this.log(`fetched books`)),
        catchError(this.handleError('getBooks', []))
      );
    }
    
—————————

# ERROR 6:

The names of the books are not shown on the Dashboard!

**Solution:**

<h4>book.name</h4> --> <h4>{{book.name}}</h4>



—————————

# ERROR 7:

Fix all onClick events in all HTML-templates

**Solution:**

click --> (click)



# TODO:

Implement the following methods in the book.service.ts !!!

```
getBook(id)
searchBooks(term)
addBook(book)
deleteBook(book)
```

# Running end-to-end tests

Run **ng e2e** to execute the end-to-end tests via Protractor. Before running the tests make sure you are serving the app via: **ng serve**.

See for the solution the online Tutorial : ‘Tour of Heroes’ —> https://angular.io/tutorial


## Hints
    - In Angular use Observables (RxJS). See for a detailed solution: https://angular.io/tutorial
   
 