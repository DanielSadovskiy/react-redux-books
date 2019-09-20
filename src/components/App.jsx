import React, { Component } from 'react';
import axios from 'axios'
import { TopMenu } from './Menu'
import { BookCard } from '../components/BookCard';
import Sort from '../containers/Sort';
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
    const { books, isLoading} = this.props;
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
        <Sort/>
        <header className="App-header">
            <div className="row">
              {
                !isLoading ? <p>Loading...</p> :
                  books.map((book,i)=> (
                    <BookCard key={i} {...book}  />
                  ))
              }
            </div>
        
          <button onClick={setBooks.bind(this, newBooks)}> SET NEW </button>
        </header>

        </div>
    );
  }
}
export default App;