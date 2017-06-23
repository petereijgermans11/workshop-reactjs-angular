
# Workshop ReactJS and Angular
Hey guys, tonight you'll have to build this app:

![Bookstore gif](https://i.imgur.com/iD69CC9.gif)

Using either react or angular, choose your weapon ⚔
## Getting started
```bash
git clone https://github.com/petereijgermans11/workshop-reactjs-angular.git

# If you want to use React
cd ./react-app
yarn start

Development Server is running on http://localhost:3000/

# If you'd rather use Angular
cd ./angular
yarn start

Development Server is running on http://localhost:4200

# Extra install:
npm install ipaddr.js


# Happy hacking ! ;-)
```

## Todo:
- Fix all the bugs before building new features

- Features:
  - Dashboard view
    - Display all the books inside the Dashboard
    - When you click on a book, you should navigate to the detail of that book
    - Implement the search for the books using Observable (Not trivial)
      - Delay the call to the API by 300 milliseconds
      - Once the result is diplayed, clicking on it should navigate to the detail of that book

  - Manage books view
   - Once again, show all the books
   - CRUD API
     - Add a new book with a title only
     - Delete a book by id
     - Get a book by id

  - Book Detail view
    - Implement the save button: It should update the book's title
    - Implement the goBack button
   
 