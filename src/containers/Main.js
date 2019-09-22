import { connect } from 'react-redux'
import * as booksActions from "../actions/books"
import App from '../components/App'
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy'

const sortBy = (books, sortedItem) => {
  switch (sortedItem) {
    case 'expensive':
      return orderBy(books, 'price', 'desc');
    case 'cheap':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
};
const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions,dispatch)
})
  const mapStateToProps = ({ items,filter }) => ({
    books: searchBooks(items.books,items.sortedItem, filter.searchQuery),
    isLoading: items.isLoading
  })
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  