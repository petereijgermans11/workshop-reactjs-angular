import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Books extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      inputContent: "",
      selectedBook: null
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  resetTitle = () => {
    this.setState({
      inputContent: ''
    })
  }

  refreshList = () => {
    // You can get the book list @ http://localhost:5000/books
    axios.get("http://localhost:5000/books").then((response) => {
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
          this.setState({
             books: response.data
           })
       }); 
  };

  add = (titlenew) => {
    // You should add your new book to http://localhost:5000/books json server will create an id for you if you dont provide one
    console.log("add title: " + titlenew);
    if (titlenew) {
      axios.post('http://localhost:5000/books', {id: undefined, title: titlenew, category: 'web'})
               .then((response) => {
                this.refreshList();
                this.resetTitle()
       }); 
       
    }
};

  remove = (bookId) => {
   // You should remove the book from  http://localhost:5000/books/bookId
   axios.delete("http://localhost:5000/books/" + bookId).then((response) => {
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
          
          this.setState({
             selectedBook: false,
             books: this.state.books.filter(e => e.id !== bookId)
           })
           // filter from list


       }); 
  };

  render() {
    return (
      <div>
        <h2>My Library</h2>
        <div>
          <label>Book's title:</label>
          <input
            type="text"
            value={this.state.inputContent}
            onChange={(e) => this.setState({inputContent: e.target.value})}
          />
          <button onClick={() => this.add(this.state.inputContent)}>
            Add
          </button>
        </div>
        <br />
        <hr />
        <ul className="books">
          {this.state.books.map(book => (
            <li
              key={book.id}
              className={this.state.selectedBook && this.state.selectedBook.id === book.id && 'selected'}
              onClick={() => this.setState({selectedBook: book})}
            >
              <span className="badge">{book.id}</span>
              {book.title}
              <button
                className="delete"
                onClick={() => this.remove(book.id)}
              >x
              </button>
            </li>
          ))}
        </ul>

        {this.state.selectedBook &&
        <div>
          <h2>
            {this.state.selectedBook.title} is my favorite book
          </h2>
          <Link to={`/detail/${this.state.selectedBook.id}`}>View details</Link>
        </div>
        }
      </div>
    );
  }
}
