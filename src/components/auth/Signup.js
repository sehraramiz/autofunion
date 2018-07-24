import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpAction } from '../../actions/auth';
import { connect } from 'react-redux';

class Signup extends Component {
  submit = (values) => {
    this.props.signUpAction(values, this.props.history);
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
            <h2>Sign Up</h2>
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
            <Field name="invite_token"
                  component="input"
                  type="text"
                  placeholder="Invitation Token"
            />
            <button type="submit" className="blue">Sign Up</button>
          </form>
          {this.errorMessage()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignup = reduxForm({
  form: 'signup'
})(Signup);

export default connect(mapStateToProps, { signUpAction })(reduxFormSignup);
