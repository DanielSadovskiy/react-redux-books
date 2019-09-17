import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createStore from "./store"
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

