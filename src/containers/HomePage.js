import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tabs, Home } from './../components';

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Tabs />
          </Col>  
        </Row>
        <Row>
          <Col md="12">
            <Home />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
