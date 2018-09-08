import React, { Component } from 'react';
import FacebookGroupPostForm from './FacebookGroupPostForm';

class FacebookGroup extends Component {
  render() {
    let groupComponent = this.props.loginState.isLoggedIn ?
    (
      <div>
        <FacebookGroupPostForm accessToken={this.props.loginState.accessToken} />
      </div>
    ) :
    (
      <div>Please login.</div>
    );
    return (
      <div>
        {groupComponent}
      </div>
    );
  }
}

export default FacebookGroup;
