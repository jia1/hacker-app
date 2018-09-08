import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { GoogleLogin } from 'react-google-login';

// https://medium.com/@alexanderleon/implement-social-authentication-with-react-restful-api-9b44f4714fa
class GoogleLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      token: '',
      user: null
    };
  }

  logout() {
    this.setState({
      isLoggedIn: false,
      token: '',
      user: null
    });
  };

  googleResponse(event) {
    console.log(event);
  }

  onFailure(error) {
    alert(error);
  }

  render() {
    let loginComponent = !!this.state.isLoggedIn ?
    (
      <div>
        <p>Authenticated</p>
        <div>
          {this.state.user.email}
        </div>
        <div>
          <Button onClick={this.logout}>
            Logout
          </Button>
        </div>
      </div>
    ) :
    (
      <div>
        <GoogleLogin
          clientId="746094604654-bs444lohda7hlq9pjeqkiikfjr175r12.apps.googleusercontent.com"
          buttonText="Google Login"
          onSuccess={this.googleResponse}
          onFailure={this.googleResponse}
        />
      </div>
    );
    return (
      <div>
        {loginComponent}
      </div>
    );
  }
}

export default GoogleLoginComponent;
