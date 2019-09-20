import {combineReducers} from 'redux'
import {items} from './books'
import {cart} from './cart'
export default combineReducers({
    items,
    cart
})