import React, { Component } from 'react';
import { connect } from 'react-redux'

import { sendMessage } from '../../actions/board';
import Card from '../Card';

class NewMessage extends Component {

  constructor(props) {
      super(props);
      this.state = { message: '' };

      this.handleChange = this.handleChange.bind(this);
      this.onSendMessageHandler = this.onSendMessageHandler.bind(this);
  }

  onSendMessageHandler() {
    this.props.sendMessage({
      message: this.state.message,
      token: this.props.token,
    })
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return(
      <div>
        <div>
          <h2>New Message</h2>
          <input
            type="text"
            name="message"
            placeholder="type your message"
            value={this.state.message}
            onChange={this.handleChange}
            />
        </div>
        <div>
          <button onClick={this.onSendMessageHandler}>send</button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ auth }) => {
  const token = auth.token === undefined ? '' : auth.token.access_token;
  return { token };
}

export default connect(mapStateToProps, { sendMessage })(NewMessage);
