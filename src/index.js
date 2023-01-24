import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import { Provider } from 'react-redux';
 import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux';
import reducer from './reducer';
const store = configureStore( {reducer:reducer} );
ReactDOM.render(
  <React.StrictMode>
<Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


