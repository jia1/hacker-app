import Formsy from 'formsy-react';
import React from 'react';
import { Button } from 'reactstrap';
import MessageInput from './MessageInput';

const defaultSubmitState = {
  canSubmit: false
};
const facebookGroupId = 537594556688736;
const facebookGroupFeed = `https://graph.facebook.com/${facebookGroupId}/feed`;

class FacebookGroupPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultSubmitState;
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
  }

  disableButton() {
    this.setState(defaultSubmitState);
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  getCanSubmit() {
    return this.state.canSubmit;
  }

  submit(model) {
    // https://developers.facebook.com/docs/groups-api/common-uses#posting-on-a-group
    // curl -i -X POST -F "message={message}" -F "access_token={accessToken}" {url}
    const body = new FormData();
    body.append("message", model.message);
    body.append("access_token", this.props.accessToken);
    fetch(facebookGroupFeed, {
      body,
      method: "POST"
    });
  }

  render() {
    return (
      <Formsy
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
      >
        <MessageInput
          name="message"
          validations="minLength:10,maxLength:63206"
          validationError="Your message is either too short or too long."
          value={this.props.messageTemplate}
          required
        />
        <Button type="submit" disabled={!this.getCanSubmit.bind(this)}>Submit</Button>
      </Formsy>
    );
  }
}

export default FacebookGroupPostForm;
