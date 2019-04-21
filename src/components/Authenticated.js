import React, { Component } from "react";
import AuthHelper from "./Auth";

export default function Authenticated(AuthComponent) {
  const Auth = new AuthHelper();

  return class WrapAuth extends Component {
    state = {
      confirmed: null,
      loaded: false
    };

    componentDidMount() {
      if (!Auth.isLoggedIn()) {
        this.props.history.replace("/login");
      } else {
        try {
          const confirmation = Auth.getConfirmation();
          this.setState({
            confirmed: confirmation,
            loaded: true
          });
        } catch (error) {
          Auth.logout();
          console.log(error);
          this.props.history.replace("/login");
        }
      }
    }

    render() {
      if (this.state.loaded == true) {
        if (this.state.confirmed) {
          return (
            <AuthComponent
              history={this.props.history}
              confirm={this.state.confirmed}
            />
          );
        } else {
          console.log("unconfirmed");
          return null;
        }
      } else {
        return null;
      }
    }
  };
}
