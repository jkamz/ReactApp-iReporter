import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header"

ReactDOM.render(<App />, document.querySelector('#app'));
ReactDOM.render(<Header />, document.querySelector('#headerCust'));
