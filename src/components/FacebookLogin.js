import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import FacebookLoginComponent from 'react-facebook-login';

/*
Facebook's response when FB.login via react-facebook-login succeeds:
{
  accessToken: String,
  expiresIn: Integer,
  id: BigInteger,
  name: String,
  reauthorize_required_in: Integer,
  signedRequest: String,
  userID: id
}
*/
const loggedOutState = {
  isLoggedIn: false,
  accessToken: null,
  expiresIn: 0,
  id: null,
  name: null,
  reauthorize_required_in: 0,
  signedRequest: null,
  userID: null
};

// https://medium.com/@alexanderleon/implement-social-authentication-with-react-restful-api-9b44f4714fa
class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = loggedOutState;
    console.log('FacebookLogin: constructor(props) done.');
  }

  logout() {
    this.setState(
      loggedOutState,
      () => {
        this.props.broadcastLoginState(this.state);
        console.log(`logout: ${JSON.stringify(this.state)}`);
      }
    );
  };

  loginCallback(response) {
    this.setState({
      isLoggedIn: true,
      ...response
    }, () => {
      this.props.broadcastLoginState(this.state)
      console.log(`loginCallback: ${JSON.stringify(this.state)}`);
    });
  }

  onFailure(error) {
    alert(error);
  }

  render() {
    console.log("FacebookLogin: render() in progress...");
    return (
      <div>
        {this.state.isLoggedIn ?
          (
            <Row>
              <Col md={{size: 6, offset: 3}} sm="6">
                Good day, {this.state.name}!
              </Col>
              <Col md="3" sm="6">
                <Button onClick={this.logout.bind(this)} size="sm">Logout</Button>
              </Col>
            </Row>
          ) :
          (
            <Row>
              <Col md="12">
                <FacebookLoginComponent
                  appId="1515880591891817"
                  autoLoad={true}
                  scope="publish_to_groups"
                  callback={this.loginCallback.bind(this)}
                />
              </Col>
            </Row>
          )
        }
      </div>
    );
  }
}

export {
  FacebookLogin,
  loggedOutState
};
