import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Panel } from 'react-bootstrap';

import MessageList from './MessageBoard/MessageList';
import NewMessage from './MessageBoard/NewMessage';

class Home extends Component {
  renderNewMessageBox() {
    if (this.props.authenticated) {
      return <NewMessage />
    }
    return '';
  }

  render() {
    return(
      <div >
        <Panel>
          <Panel.Body>
            <p>
              <b>تابلو اعلانات</b> رو میبینید.
            </p>
            <p>
              میتونید پیامی رو با تگ های پیش فرض روی تابلو بذارید.
            </p>
            <p>
              پیام هایی که اینجا گذاشته میشه رو میتونید توی
              <a href="http://telegram.me/blah"> این کانال تلگرام </a>
              ببینید.
            </p>
          </Panel.Body>
        </Panel>
        {this.renderNewMessageBox()}
        <MessageList />
      </div>
    );
  };
}

const mapStateToProps = ({ auth }) => {
  return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps)(Home);
