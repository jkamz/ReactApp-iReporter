import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
  export default class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">iReporter</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Redflags</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Incidents</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    User
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Log In
                    </DropdownItem>
                    <DropdownItem>
                      Sign Up
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }