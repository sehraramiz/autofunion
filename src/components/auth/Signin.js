import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction } from '../../actions/auth';
import { connect } from 'react-redux';

class Signin extends Component {
  submit = (values) => {
    this.props.signInAction(values, this.props.history);
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <form className="form" onSubmit={ handleSubmit(this.submit) }>
            <h2>Sign In</h2>
            <Field name="username"
                  component="input"
                  type="text"
                  placeholder="Username"
            />
            <Field name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
            />
            <button type="submit" className="blue">Sign In</button>
          </form>
          {this.errorMessage()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
  form: 'signin'
})(Signin);

export default connect(mapStateToProps, { signInAction })(reduxFormSignin);
