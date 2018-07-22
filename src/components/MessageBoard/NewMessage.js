import React, { Component } from 'react';
import { connect } from 'react-redux'

import { sendMessage } from '../../actions/board';

class NewMessage extends Component {

  constructor(props) {
      super(props);
      this.state = { message: '', selectedTags: [] };

      this.handleChange = this.handleChange.bind(this);
      this.onSendMessageHandler = this.onSendMessageHandler.bind(this);
      this.renderTagList = this.renderTagList.bind(this);
      this.handleTagSelect = this.handleTagSelect.bind(this);
  }

  onSendMessageHandler() {
    this.props.sendMessage({
      message: this.state.message,
      token: this.props.token,
      tags: this.state.selectedTags,
    })
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  renderTagList(tag) {
    return <option value={tag.id}>{tag.word}</option>
  }

  handleTagSelect(event) {
    let options = event.target.options;
    let tags = [];
    // TODO add word, slug to this
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        tags.push({
          id: options[i].value,
          word: "word",
          slug: "slug",
        });
      }
    }
    this.setState({ selectedTags: tags });
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
          <b>تگ ها</b>
          <select name="cars" onChange={this.handleTagSelect} multiple>
            { this.props.tags === undefined ? '' :
              this.props.tags.map( (tag) => this.renderTagList(tag) )
            }
          </select>
        </div>
        <div>
          <button onClick={this.onSendMessageHandler}>send</button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ auth, board }) => {
  const token = auth.token === undefined ? '' : auth.token.access_token;
  let tags = board.tags.data;
  return { token, tags };
}

export default connect(mapStateToProps, { sendMessage })(NewMessage);
