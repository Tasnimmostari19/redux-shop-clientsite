import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProducts } from './redux/slices/productSlice';
import cartReducer, { getTotals } from './redux/slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer
  }
});

store.dispatch(getTotals());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
