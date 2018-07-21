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
        <h2>اتوفانیون،<br/>چیزایی که اتوماسیون آموزشی کم داره.</h2>
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
