
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

# Happy hacking ! ;-)
```

## Todo:
- Fix all the bugs before building new features

# ERROR 1:

Failed to compile.

Error in ./src/Components/Bookdetail.jsx
Syntax error: Unexpected token, expected , (54:36)

  52 |                     </div>
  53 |                     <button onClick="this.goBack">Back</button>
> 54 |                     <button onClick=this.save>Save</button>
     |                                     ^
  55 |                 </div>
  56 |                 :
  57 |                 <div />


  **Solution:**

                    <button onClick={this.goBack}>Back</button>
                    <button onClick={this.save}>Save</button>

# ERROR 2:   

All JavaScript expressions in the JSX has NO curly braces, example:

render(){
      return <h1>Hello, this.props.name</h1>;

**Solution:**

You have to embed any JavaScript expression in JSX by wrapping it in curly braces:

      return <h1>Hello, { this.props.name }</h1>;


# ERROR 3:

webpackHotDevClient.js:198 ./src/Components/Books.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/Books.jsx
  2:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the Books.jsx

# ERROR 4:
webpackHotDevClient.js:198 ./src/Components/Bookdetail.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/Bookdetail.jsx
  2:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the Bookdetail.jsx

# ERROR 5:
webpackHotDevClient.js:198 ./src/Components/Dashboard.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/Dashboard.jsx
  3:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the Dashboard.jsx

# ERROR 6:
webpackHotDevClient.js:198 ./src/Components/BookSearch.jsx

/Users/pei20063/Desktop/WorkshopReactJSAngular/workshop-reactjs-angular/workshop-reactjs-angular/react-app/src/Components/BookSearch.jsx
  2:8  warning  'axios' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

printWarnings @ webpackHotDevClient.js:198

**Solution:**
Use Axios in the BookSearch.jsx


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

## Hints
    - Use Axios in ReactJS. Axios is a Promise based HTTP client for the browser and node.js   
 