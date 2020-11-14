import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router-dom"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { Reducer } from "./store/Reducer";
import {useSelector} from "react-redux"
import thunk from "redux-thunk";
import logger from 'redux-logger'

const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router> 
    </Provider>,
  document.getElementById('root')
);
