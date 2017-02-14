import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './styles/index.css';
import App from './components/App';
import allReducers from './reducers/index';


const middleware = applyMiddleware(thunk, logger());
// the brain holding the data½
const store = createStore(allReducers, middleware);

//render the DOM
// include different Components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
