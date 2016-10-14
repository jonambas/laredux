import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import { login } from '../../../actions/userApi';

class Login extends React.Component {

  componentDidMount() {
    const { authenticated } = this.props;
    if (authenticated) {
      browserHistory.push('/dashboard');
    }
  }

  render() {
    const { handleSubmit, errorMessage, authenticating } = this.props;

    const onSubmit = handleSubmit(credentials => this.props.login(credentials));

    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%' }}>
        <div className="col-xs-10 col-md-6 col-lg-4">
          <h3>Login</h3>
          <p>{ errorMessage || '' }</p>
          <form onSubmit={onSubmit} >
            <fieldset>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" component="input" type="text" />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" component="input" type="password" />
            </fieldset>
            <button type="submit" disabled={authenticating}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  authenticating: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    authenticating: state.user.authenticating,
    errorMessage: state.user.loginError,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default reduxForm({
  form: 'login',
})(connect(mapStateToProps, mapDispatchToProps)(Login));
