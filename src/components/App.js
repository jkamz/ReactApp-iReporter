import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Redflags from "./Redflag"
import styles from '../styles/app.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Redflags} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </BrowserRouter>
    );
  }
}

export default App;
