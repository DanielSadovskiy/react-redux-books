import {combineReducers} from 'redux'
import {items} from './books'
import {cart} from './cart'
import {filter} from './filter'
export default combineReducers({
    items,
    cart,
    filter
})