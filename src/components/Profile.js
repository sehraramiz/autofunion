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
        <div>
          <h2>پروفایل من</h2>
          <b>سلام  {this.props.user === undefined ? '' : this.props.user.username}</b>
        </div>
        <button onClick={this.onSignOutClick}>
          خروج
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { user: auth.user };
}

export default connect(mapStateToProps, { signOutAction })(Profile);
