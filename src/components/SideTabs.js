import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

const templatesRootDirectory = '../constants/templates';

class SideTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateCount: 0,
      templateMap: {}
    };
    const templatesDirectory = `${templatesRootDirectory}/${this.props.templateType}`;
    // TODO: Count number of template files (no need to open each file)
  }

  useTemplate(event, templateId) {
    // TODO: Lazy load templates
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
