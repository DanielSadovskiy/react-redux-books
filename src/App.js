import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setBooks } from "./actions/books"
import axios from 'axios'
import {Container} from "react-bootstrap"
import { TopMenu } from './components/Menu'
import { BookCard } from './components/BookCard';
const flexible = {
  display: 'flex',
  flexFlow: "row wrap",
  width: "100%"
}
class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('/books.json')
      .then(response => {
        console.log(response.data)
        setBooks(response.data)
      })

  }
  render() {
    const { books, isLoading } = this.props;
    const { setBooks } = this.props;
    const newBooks = [
      {
        id: 1,
        title: "Lord of the rings"
      }
    ]

    return (
      <div className="container">
        <TopMenu />
        <header className="App-header">
            <div className="row">
              {
                !isLoading ? <p>Loading...</p> :
                  books.map(book => (
                    <BookCard {...book} key={book.id} />
                  ))
              }
            </div>
        
          <button onClick={setBooks.bind(this, newBooks)}> SET NEW </button>
        </header>

        </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})
const mapStateToProps = ({ items }) => ({
  books: items.books,
  isLoading: items.isLoading
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
