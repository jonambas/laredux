/* eslint-disable no-class-assign, react/forbid-prop-types */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import { register } from '../../../actions/api';

class Register extends React.Component {

  componentDidMount() {
    const { authenticated } = this.props;
    if (authenticated) {
      browserHistory.push('/dashboard');
    }
  }

  render() {
    const { handleSubmit, registering, errorMessages, anyTouched } = this.props;

    const onSubmit = handleSubmit(credentials => this.props.register(credentials));

    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%' }}>
        <div className="col-xs-10 col-md-6 col-lg-4">
          <h3>Registration</h3>

          <form onSubmit={onSubmit} >
            <fieldset>
              {errorMessages && errorMessages.name && anyTouched ?
                errorMessages.name.map(i => <p>name: {i}</p>) : ''}
              <label htmlFor="name">Name</label>
              <Field name="name" component="input" type="text" />
            </fieldset>
            <fieldset>
              {errorMessages && errorMessages.email && anyTouched ?
                errorMessages.email.map(i => <p>email: {i}</p>) : ''}
              <label htmlFor="email">Email</label>
              <Field name="email" component="input" type="text" />
            </fieldset>
            <fieldset>
              {errorMessages && errorMessages.password && anyTouched ?
                errorMessages.password.map(i => <p>pw: {i}</p>) : ''}
              <label htmlFor="password">Password</label>
              <Field name="password" component="input" type="password" />
            </fieldset>
            <button type="submit" disabled={registering}>Register</button>
          </form>

        </div>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func,
  registering: PropTypes.bool,
  anyTouched: PropTypes.bool,
  errorMessages: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    registering: state.user.registering,
    errorMessages: state.user.registerError,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ register }, dispatch);
}

Register = connect(mapStateToProps, mapDispatchToProps)(Register);
Register = reduxForm({ form: 'register' })(Register);
export default Register;

