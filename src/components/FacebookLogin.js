import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
  }

  logout() {
    this.setState(loggedOutState);
  };

  facebookResponse(response) {
    this.setState({
      isLoggedIn: true,
      ...response
    });
    this.props.broadcastLoginState(this.state);
    console.log(this.state);
  }

  onFailure(error) {
    alert(error);
  }

  render() {
    let loginComponent = !!this.state.isLoggedIn ?
    (
      <div>
        <p>Good day, {this.state.name}!</p>
        <div>
          <Button onClick={this.logout.bind(this)}>
            Logout
          </Button>
        </div>
      </div>
    ) :
    (
      <div>
        <FacebookLoginComponent
          appId="1515880591891817"
          autoLoad={false}
          scope="publish_to_groups"
          callback={this.facebookResponse.bind(this)} />
      </div>
    );
    return (
      <div>
        {loginComponent}
      </div>
    );
  }
}

export {
  FacebookLogin,
  loggedOutState
};
