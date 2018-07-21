import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchBoard,
  fetchBoardWithTag,
  fetchTags,
} from '../../actions/board';
import Message from './MessageItem';
import TagList from '../Tags/TagList';

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
    this.props.fetchTags();
  }

  onTagClick(tagId) {
    this.props.fetchBoardWithTag({ tagId })
  }

  render() {
    return(
      <div>
        <TagList tags={this.props.tags} onTagClick={this.onTagClick}/>
        <div class="message-board">
          { this.props.board === undefined ? 'no message to show' :
            this.props.board.map( (listValue) => this.renderMessages(listValue) )
          }

        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ board }) => {
  let data = board.board.data;
  let tags = board.tags.data;
  return { board: data, tags };
}

export default connect(mapStateToProps, {
  fetchBoard,
  fetchBoardWithTag,
  fetchTags,
})(MessageList);
