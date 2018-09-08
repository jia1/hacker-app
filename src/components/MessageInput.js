import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { withFormsy } from 'formsy-react';

// Ref: https://github.com/formsy/formsy-react
class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form.
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is returned only if the component is invalid.
    const errorMessage = this.props.getErrorMessage();
    return (
      <FormGroup>
        <Label for="message">Message</Label>
        <Input
          id="messageInput"
          name="message"
          onChange={this.changeValue}
          rows={10}
          type="textarea"
          value={this.props.getValue() || ''}
        />
        <span>{errorMessage}</span>
      </FormGroup>
    );
  }
}

export default withFormsy(MessageInput);
