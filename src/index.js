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
import DataDisplay from "./components/dashboard/DataDisplay"

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router> 
    </Provider>,
  document.getElementById('root')
);
