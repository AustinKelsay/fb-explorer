import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router-dom"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { Reducer } from "./store/Reducer";
import {persistStore, persistReducer} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react"
import storage from "redux-persist/lib/storage/session"
import thunk from "redux-thunk";
import logger from 'redux-logger'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, Reducer)
const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router> 
    </Provider>,
  document.getElementById('root')
);
