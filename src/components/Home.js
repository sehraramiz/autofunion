import React, { Component } from 'react';
import { connect } from 'react-redux';

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
