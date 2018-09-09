import Formsy from 'formsy-react';
import React from 'react';
import { Button } from 'reactstrap';
import MessageInput from './MessageInput'; // Refactor import
import SimpleInput from './SimpleInput';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
    const possibleMessageTemplate = model.message;
    let finalMessage = possibleMessageTemplate;
    this.props.messageVariables.forEach((variableName) => {
      const templateStringRegex = new RegExp(`{${variableName}}`, 'g');
      finalMessage = finalMessage.replace(templateStringRegex, model[variableName]);
    });
    body.append('message', finalMessage);
    body.append('access_token', this.props.accessToken);
    fetch(facebookGroupFeed, {
      body,
      method: 'POST'
    }).then((response) => {
      return response.json();
    }).then((json) => {
      // const facebookId = json.id; // I could not inject this into toast.
      toast(({ closeToast }) => {
        return (
          <div>
            <p>Posted!</p>
            <p>
              See your post on <a href={`https://facebook.com/`}>Facebook</a>.
            </p>
          </div>
        );
      });
    });
    this.form.reset();
  }

  render() {
    let variableValueInputs = this.props.messageVariables.map((variableName, index) => {
      return (
        <SimpleInput
          key={index}
          name={variableName}
          validations='maxLength:63206'
          validationError='Your value is too long.'
          value=''
        />
      );
    });
    return (
      <Formsy
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        ref={(event) => { this.form = event; }}
      >
        <MessageInput
          name="message"
          validations="minLength:10,maxLength:63206"
          validationError="Your message is either too short or too long."
          value={this.props.messageTemplate}
          required
        />
        {variableValueInputs}
        <Button
          color={this.getCanSubmit() ? 'primary' : 'secondary'}
          disabled={!this.getCanSubmit()}
          type="submit"
        >
          Post
        </Button>
        <ToastContainer />
      </Formsy>
    );
  }
}

export default FacebookGroupPostForm;
