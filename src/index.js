import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './styles/index.css';
import App from './components/App';
import allReducers from './reducers/index';

// the brain holding the data
const store = createStore(allReducers);
console.log(" Store state ",store.getState())
//render the DOM
// include different Components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
