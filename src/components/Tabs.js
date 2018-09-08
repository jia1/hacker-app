import React, { Component } from 'react';
import routes from '../constants/routes.json';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class Tabs extends Component {
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
          <NavbarBrand href={routes.HOME}>hacker-app</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={routes.FACEBOOKGROUP}>Deal with unreplied emails</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={routes.FACEBOOKGROUP}>Post on Facebook group</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={routes.FACEBOOKGROUP}>Tweet something</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Tabs;
