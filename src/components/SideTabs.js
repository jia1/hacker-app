import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

class SideTabs extends Component {
  useTemplate(event, templateId) {
    console.log(event);
    console.log(templateId);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar vertical>
            <NavItem onClick={(e) => this.useTemplate(e, 1)}>
              Template post #1
            </NavItem>
            <NavItem onClick={(e) => this.useTemplate(e, 2)}>
              Template post #2
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SideTabs;
