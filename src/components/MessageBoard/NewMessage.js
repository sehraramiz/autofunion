import React, { Component } from 'react';

import Card from '../Card';

class NewMessage extends Component {
  render() {
    return(
      <div>
        <div>
          <h2>New Message</h2>
          <input type="text" name="message" placeholder="type your message" />
        </div>
        <div>
          <button>send</button>
        </div>
      </div>
    );
  };
}

export default NewMessage;
