
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

      return <h1>Hello, {this.props.name}</h1>;


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
 