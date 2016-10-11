import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../../actions/user';

class Login extends Component {

  componentDidMount() {
    const { authenticated } = this.props;
    if (authenticated) {
      browserHistory.push('/dashboard');
    }
  }

  onSubmit(credentials) {
    this.props.login(credentials);
  }

  render() {
    const { handleSubmit, errorMessage, authenticated } = this.props;
    
    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%'}}>
        <div className="col-xs-5">
          <h3>Login</h3>
          <p>{ errorMessage ? errorMessage : '' }</p>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            <fieldset>
              <label>Email:</label>
              <Field name="email" component="input" type="text"/>
            </fieldset>
            <fieldset>
              <label>Password:</label>
              <Field name="password" component="input" type="password"/>
            </fieldset>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    errorMessage: state.user.errorMessage,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);
Login = reduxForm({ form: 'login' })(Login);
export default Login;
