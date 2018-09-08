import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Tabs,
  SideTabs,
  FacebookGroup,
  FacebookLogin,
  facebookLoggedOutState
} from './../components';

// https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
class FacebookGroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = facebookLoggedOutState;
  }

  updateLoginState(loginState) {
    this.setState(loginState);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Tabs />
          </Col>  
        </Row>
        <Row>
          <Col md="3">
            <SideTabs templateType="facebookGroupPost" />
          </Col>
          <Col md="9">
            <Row>
              <Col md="12">
                <FacebookLogin broadcastLoginState={this.updateLoginState.bind(this)} />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FacebookGroup loginState={this.state} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FacebookGroupPage;
