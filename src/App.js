import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setBooks} from "./actions/books"
class App extends Component {
  render() {
    const {books} = this.props.books;
    const {setBooks} = this.props;
    const newBooks = [
      {
        id:1,
        title:"Lord of the rings"
      }
    ]
    return (
      <div className="App">
        <header className="App-header">
          <h1>{books[0].title}</h1>
          <button onClick={setBooks.bind(this,newBooks)}> SET NEW </button>
        </header>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})
const mapStateToProps = state => ({
  ...state
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
