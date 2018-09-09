import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { MessageTemplates } from '../constants/templates';

// TODO: Make this more general-purpose (i.e. Instead of it being just for choosing templates,
// this component should be for navigation too.)
// Advice from Girish: Should reduce fragmentation of logic and also consider delegating the
// MessageTemplates importing to another class so that this class can be solely for selection.
class SideTabs extends Component {
  constructor(props) {
    super(props);
    const templates = MessageTemplates[this.props.templateType];
    this.state = {
      templates
    };
  }

  useTemplate(event, templateId) {
    const messageTemplate = this.state.templates[templateId].message;
    let toReplace = messageTemplate.match(/{[^\s{}]*}/g); // Can be more rigorous.
    // TODO: Refactor this
    if (toReplace === null) {
      toReplace = [];
    }
    const variableNames = toReplace.map((stringToReplace) => {
      return stringToReplace.replace(/[{}]/g, '');
    });
    this.props.broadcastMessageTemplate({
      messageTemplate,
      variableNames
    });
  }

  render() {
    // https://stackoverflow.com/questions/49980079/enumerate-through-a-components-state-in-react
    const navItems = this.state.templates.map((template, index) =>
      (
        <NavItem key={index} onClick={(event) => this.useTemplate(event, index)}>
          {template.name}
        </NavItem>
      )
    );
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar vertical>
            {navItems}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SideTabs;
