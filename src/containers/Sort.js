import { connect } from 'react-redux'
import * as sortAction from '../actions/sort'
import { bindActionCreators } from 'redux';
import { Sort } from '../components/Sort';



const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(sortAction,dispatch)
})
  const mapStateToProps = ({ items }) => ({
    books: items.sortedItem,
    isLoading: items.isLoading
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Sort);