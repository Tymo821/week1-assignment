import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/App";
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './components/login-page';

ReactDOM.render(
  React.createElement(LoginPage, {}, null),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();