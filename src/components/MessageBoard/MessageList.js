import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBoard, fetchBoardWithTag } from '../../actions/board';
import Message from './MessageItem';

class MessageList extends Component {
  constructor(props) {
      super(props);

      this.onTagClick = this.onTagClick.bind(this);
  }

  renderMessages = (value) => {
    return <Message value={value} onTagClick={this.onTagClick}/>
  }

  componentWillMount() {
    this.props.fetchBoard();
  }

  onTagClick(tagId) {
    this.props.fetchBoardWithTag({ tagId })
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

export default connect(mapStateToProps, { fetchBoard, fetchBoardWithTag })(MessageList);
