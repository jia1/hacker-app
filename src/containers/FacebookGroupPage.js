import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Tabs,
  SideTabs,
  FacebookGroup,
  FacebookLogin,
  facebookLoggedOutState
} from './../components';

const facebookGroupPostTemplateType = 'facebookGroupPost';

// https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
class FacebookGroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: facebookLoggedOutState,
      messageTemplate: '',
      variableNames: []
    };
  }

  updateLoginState(loginState) {
    this.setState({
      loginState
    });
  }

  updateMessageTemplate(messageTemplate) {
    // {messageTemplate: String, variableNames: [String]}
    this.setState({
      ...messageTemplate
    }, () => {
      console.log(this.state);
    });
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
          <Col md="12">
            <FacebookLogin broadcastLoginState={this.updateLoginState.bind(this)} />
          </Col>
        </Row>
        {this.state.loginState.isLoggedIn ?
          (
            <Row>
              <Col md="3">
                <SideTabs
                  templateType={facebookGroupPostTemplateType}
                  broadcastMessageTemplate={this.updateMessageTemplate.bind(this)}
                />
              </Col>
              <Col md="9">
                <FacebookGroup
                  accessToken={this.state.loginState.accessToken}
                  messageTemplate={this.state.messageTemplate}
                  messageVariables={this.state.variableNames}
                />
              </Col>
            </Row>
          ) :
          (
            <div>
            </div>
          )
        }
      </Container>
    );
  }
}

export default FacebookGroupPage;
