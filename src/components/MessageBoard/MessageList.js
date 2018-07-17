import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board';
import Message from './MessageItem';

class MessageList extends Component {
  renderMessages = (value) => {
    return <Message value={value} />
  }

  componentWillMount() {
    this.props.fetchBoard();
  }

  render() {
    return(
      <div class="message-board">
        { this.props.board === undefined ? 'no message to show' :
          this.props.board.map( (listValue) => this.renderMessages(listValue) )
        }

      </div>
    );
  };
}

const mapStateToProps = ({ board }) => {
  let data = board.board.data
  return { board: data };
}

export default connect(mapStateToProps, { fetchBoard })(MessageList);
