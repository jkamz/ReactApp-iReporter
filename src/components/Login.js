import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import styles from "../styles/signup.css";
import {Link} from 'react-router-dom';
import AuthHelper from './Auth';

export default class Login extends Component {

  Auth = new AuthHelper();

  state = {
    username: "",
    password: "",
    wrongCreds: false,
    success: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        console.log(res)
        if (res == false) {
            //return alert ("Unsuccessful login, check your credentials")
            this.setState({wrongCreds: true})
        } else {
          if (res.token){
            this.setState({success: true})
          }
        }
        //this.props.history.replace("/");
      })
      .catch(error => {
        //alert(error)
      })
  }

  // componentWillMount() {
  //   if(this.Auth.isLoggedIn()) {
      
  //     //this.props.history.replace('/signup')
  //   }
  // }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <h1 className="text-center">Login</h1>
        <FormGroup>
          <Input
            onChange={this.handleChange}
            name="username"
            className="form-input"
            type="email"
            placeholder="Email"
          />
          <Input
            name="password"
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Alert 
            className={this.state.wrongCreds ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            Unsuccessful login, check your credentials
          </Alert>
          <Alert 
            className={this.state.success ? "show": "hide" } 
            id = "numberError"
            color="success"> 
            Successfully logged in
          </Alert>
        </FormGroup>
        <Button type="submit" className="btn-lg btn-dark btn-block sbtn">
          Login
        </Button>
        <Link className="suLink" to="/Signup">Don't have an account yet? Signup</Link>
      </Form>
    );
  }
}
