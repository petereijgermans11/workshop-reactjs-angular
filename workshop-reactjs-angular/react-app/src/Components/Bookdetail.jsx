import React, {Component} from 'react';
import axios from 'axios';

export class BookDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: {
                id: 0,
                title: '',
                category: '',
            },
        };
    }

    componentDidMount(){
        this.fetchBook(this.props.match.params.id);
    }

    fetchBook = (id) => {
        // You can get the book details at http://localhost:5000/books/id
        // axios.get("http://localhost:5000/books/" + ....).then(....)
    };

    update = (event) =>
        this.setState({
            book: {
                ...this.state.book,
                title: event.target.value
            }
        });

    save = () => {
        // You can update the book details at http://localhost:5000/books/id
        // axios.put('http://localhost:5000/books/' + this.state.book.id, this.state.book).then(....)
  };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        const {book} = this.state;
        return (
            book ?
                <div >
                    <h2>book.title details!</h2>
                    <div>
                        <label>id: </label>{book.id}</div>
                    <div>
                        <label>Title: </label>
                        <input value="this.state.book.title" onChange={this.update()} placeholder="title"/>
                    </div>
                    <button onClick="this.goBack">Back</button>
                    <button onClick=this.save>Save</button>
                </div>
                :
                <div />
        );
    }
};
