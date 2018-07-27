import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Grid } from 'react-bootstrap';

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
    /*
      if we deselected a tag tagId is -1 and we should clear tag filter from
      board results
    */
    if (tagId === -1) {
      this.props.fetchBoard();
    } else {
      this.props.fetchBoardWithTag({ tagId })
    }
  }

  render() {
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <TagList tags={this.props.tags} onTagClick={this.onTagClick}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              { this.props.board === undefined ? 'no message to show' :
                this.props.board.map( (listValue) => this.renderMessages(listValue) )
              }
            </Col>
          </Row>
        </Grid>
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
