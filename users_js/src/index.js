import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import Hello from './Hello';
//import Card from './Card';
//import CardList from './CardList'
import App from './App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
//* Importing robots arrays
//import { robots } from './robots';
  //! It isn't default, I have to use { }

//! App
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//! Hello World
// ReactDOM.render(
//   <h1> Hello World </h1>, document.getElementById('root')
// );

//! Hello React Ninja
// ReactDOM.render(
//   <Hello greeting={ 'Hello' + 'React Ninja' }/>, document.getElementById('root')
// );

//! Card for Robots
ReactDOM.render(
  < App />
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
