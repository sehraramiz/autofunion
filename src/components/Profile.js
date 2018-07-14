import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutAction } from '../actions/auth';


class Profile extends Component {
  onSignOutClick = () => {
    this.props.signOutAction(this.props.history);
  }

  render() {
    return (
      <div >
        <h2>پروفایل من</h2>
        <button onClick={this.onSignOutClick}>
          خروج
        </button>
      </div>
    );
  }
}

export default connect(null, { signOutAction })(Profile);
