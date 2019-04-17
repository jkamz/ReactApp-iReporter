import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import axios from "axios";
import {Link} from 'react-router-dom';
import styles from "../styles/signup.css";

class Signup extends Component {
  state = {
    first_name: "",
    email: "",
    last_name: "",
    other_name: "",
    username: "",
    mobile_number: "",
    password: "",
    isVisible: false,
    first_name_error: null,
    email_error: "",
    last_name_error: "",
    other_name_error: "",
    username_error: "",
    mobile_number_error: "",
    password_error: "",
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleErrors = (error, message) => {
    this.setState({
      isVisible: true,
      [error]: message
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const signupUrl =
      "https://ireporter-drf-api-staging.herokuapp.com/api/auth/signup/";

    const formData = {
      first_name: this.state.first_name,
      email: this.state.email,
      last_name: this.state.last_name,
      other_name: this.state.other_name,
      username: this.state.username,
      mobile_number: this.state.mobile_number,
      password: this.state.password
    }

    fetch(signupUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json"
      }
    })
	  .then(response => response.json())
      .then(data => {
        if (data.token) {
          const activateUrl =
            "https://ireporter-drf-api-staging.herokuapp.com/api/auth/activate/";

         let activateData = {
            uid: data.id,
            token: data.token
          };
          fetch(activateUrl, {
            method: "POST",
            body: JSON.stringify(activateData),
            headers: {
              "content-type": "application/json"
            }
          });

          this.props.history.replace('/')
		} else {

      Object.keys(data).forEach( key => {
        const error = `${key}_error`;
        const message = data[key];
        this.handleErrors(error, message);
        console.log(this.state)
        console.log(error);
        console.log(message);
      })
      console.log(data)
      
		}
		
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="signup-form">
        <h1 className="text-center">Sign Up</h1>
        <FormGroup>
          <Input
            name="first_name"
            onChange={this.handleChange}
            className="form-input"
            placeholder="First Name"
          />
          <Alert 
            className={this.state.first_name_error ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            {this.state.first_name_error}
          </Alert>
          <Input
            onChange={this.handleChange}
            name="last_name"
            className="form-input"
            placeholder="Last Name"
          />
          <Alert 
            className={this.state.last_name_error ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            {this.state.last_name_error}
          </Alert>
          <Input
            onChange={this.handleChange}
            name="other_name"
            className="form-input"
            placeholder="Other Name"
          />
          <Alert 
            className={this.state.other_name_error ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            {this.state.other_name_error}
          </Alert>
          <Input
            onChange={this.handleChange}
            name="username"
            className="form-input"
            placeholder="User Name"
          />
          <Alert 
            className={this.state.username_error ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            {this.state.username_error}
          </Alert>
          <Input
            onChange={this.handleChange}
            name="email"
            className="form-input"
            type="email"
            placeholder="Email"
          />
          <Alert 
            className={this.state.email_error ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            {this.state.email_error}
          </Alert>
          <Input
            onChange={this.handleChange}
            name="mobile_number"
            className="form-input"
            placeholder="Mobile Number"
          />
          <Alert 
            className={this.state.mobile_number_error ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            {this.state.mobile_number_error}
          </Alert>
          <Input
            name="password"
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Alert 
            className={this.state.password_error ? "show": "hide" } 
            id = "numberError"
            color="danger"> 
            {this.state.password_error}
          </Alert>
        </FormGroup>
        <Button type="submit" className="btn-lg btn-dark btn-block sbtn">
          Sign Up
        </Button>
        <Link className="suLink" to="/login">Already have an account? Signin</Link>
      </Form>
    );
  }
}

export default Signup;
