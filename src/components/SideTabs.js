import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { MessageTemplates } from '../constants/templates';

class SideTabs extends Component {
  constructor(props) {
    super(props);
    const templates = MessageTemplates[this.props.templateType];
    this.state = {
      templateCount: templates.length,
      templates
    };
  }

  useTemplate(event, templateId) {
    // TODO: Load template into form
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
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SideTabs;
