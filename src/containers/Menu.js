import { connect } from 'react-redux'
import * as cartAction from '../actions/cart'
import { bindActionCreators } from 'redux';
import Menu from '../components/Menu';



const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartAction, dispatch)
})
const mapStateToProps = ({ cart }) => ({
  countcart: cart.items.length,
  total: cart.items.reduce((total, book) => total + book.price, 0)
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu);