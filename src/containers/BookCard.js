import { connect } from 'react-redux'
import * as cartAction from '../actions/cart'
import { bindActionCreators } from 'redux';
import {BookCard} from '../components/BookCard';



const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartAction, dispatch)
})
const mapStateToProps = ({cart},{id}) => ({
    countOfExactlyBook: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0)
  
})
export default connect(mapStateToProps, mapDispatchToProps)(BookCard);