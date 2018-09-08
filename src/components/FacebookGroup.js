import React, { Component } from 'react';
import FacebookGroupPostForm from './FacebookGroupPostForm';

class FacebookGroup extends Component {
  render() {
    return (
      <div>
        {!!this.props.isLoggedIn ?
          (
            <div>
              <FacebookGroupPostForm />
            </div>
          ) :
          (
            <div>Please login.</div>
          )
        }
      </div>
    );
  }
}

export default FacebookGroup;
