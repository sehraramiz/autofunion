import React from 'react';
import Message from './MessageItem';

const MessageList = (props) => {
    return (
        <div class="message-board">
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
    );
};

export default MessageList;
