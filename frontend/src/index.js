import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { configureStore as createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducers';

const reduxStore = createStore({reducer: mainReducer})
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={reduxStore}> 
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

