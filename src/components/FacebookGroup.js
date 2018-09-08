import React, { Component } from 'react';
import FacebookGroupPostForm from './FacebookGroupPostForm';

class FacebookGroup extends Component {
  render() {
    return (
      <div>
        <FacebookGroupPostForm
          accessToken={this.props.accessToken}
          messageTemplate={this.props.messageTemplate}
        />
      </div>
    );
  }
}

export default FacebookGroup;
