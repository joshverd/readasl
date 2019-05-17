import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.scss';

// Importing all reducers
import allReducers from './reducers/index.js';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>

  </Provider>,
  document.getElementById('root')
);
