import React from 'react';
import AuthHelper from "./Auth";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styles from "../styles/signup.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      collapsed: true,
      loggedIn: false
    };
  }

  Auth = new AuthHelper();

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleLogout = (e) => {
    e.preventDefault()
    this.Auth.logout()
    window.location.href='/'
  }

  componentDidMount() {
    if (this.Auth.isLoggedIn()) {
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand href="/" className="mr-auto">iReporter</NavbarBrand>
          <NavLink href="/">Redflags</NavLink>
          <NavLink href="">Incidents</NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem className={this.Auth.isLoggedIn() ? "hide": "show"}>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
              <NavItem className={this.Auth.isLoggedIn() ? "show": "hide"}>
                <NavLink className="custombtn" style={{color: 'red'}} onClick={this.handleLogout}> Logout </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

