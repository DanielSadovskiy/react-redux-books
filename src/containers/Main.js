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

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions,dispatch)
})
  const mapStateToProps = ({ items }) => ({
    books: sortBy(items.books,items.sortedItem),
    isLoading: items.isLoading
  })
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  