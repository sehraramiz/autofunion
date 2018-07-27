import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Modal,
  Button,
} from 'react-bootstrap';

import { sendMessage } from '../../actions/board';

class NewMessage extends Component {

  constructor(props) {
      super(props);
      this.state = { message: '', selectedTags: [], show: false };

      this.handleChange = this.handleChange.bind(this);
      this.onSendMessageHandler = this.onSendMessageHandler.bind(this);
      this.renderTagList = this.renderTagList.bind(this);
      this.handleTagSelect = this.handleTagSelect.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleShow = this.handleShow.bind(this);
  }

  onSendMessageHandler() {
    if (this.state.selectedTags.length === 0 || this.state.message === "") {
      console.log('is empty');
      return;
    }
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

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return(
      <div>
        <button onClick={this.handleShow} >
          ارسال پیام جدید
        </button>

        <Modal show={this.state.show} onHide={this.handleClose} dir='rtl'>
          <Modal.Header closeButton>
            <Modal.Title>پیام جدید</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup
              controlId="formControlsTextarea"
              type="text"
              name="message"
              placeholder="type your message"
              value={this.state.message}
              onChange={this.handleChange}
              maxLength={300}>
              <FormControl componentClass="textarea" placeholder="پیام خود را اینجا بنویسید" />
            </FormGroup>
            <div>
              <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>تگ ها</ControlLabel>
                <FormControl componentClass="select" onChange={this.handleTagSelect} multiple>
                  { this.props.tags === undefined ? '' :
                    this.props.tags.map( (tag) => this.renderTagList(tag) )
                  }
                </FormControl>
              </FormGroup>
            </div>
            <div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onSendMessageHandler}>ارسال</Button>
          </Modal.Footer>
        </Modal>

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
