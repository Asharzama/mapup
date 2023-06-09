import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './redux/mapSlice';
import App from './App';
import "./index.css"

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
