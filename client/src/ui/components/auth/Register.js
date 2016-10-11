import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../../actions/user';

class Register extends Component {
  
  onSubmit(credentials) {
    this.props.register(credentials);
  }

  render() {
    const { handleSubmit, registering, errorMessages } = this.props;
    
    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%'}}>
        <div className="col-xs-10 col-md-4">
          <h3>Registration</h3>          

          <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
            <fieldset>
              {errorMessages && errorMessages.name  ? errorMessages.name.map(i => <p>name: {i}</p> ) : ''}
              <label>Name:</label>
              <Field name="name" component="input" type="text"/>
            </fieldset>
            <fieldset>
              {errorMessages && errorMessages.email  ? errorMessages.email.map(i => <p>email: {i}</p> ) : ''}
              <label>Email:</label>
              <Field name="email" component="input" type="text"/>
            </fieldset>
            <fieldset>
              {errorMessages && errorMessages.password  ? errorMessages.password.map(i => <p>pw: {i}</p> ) : ''}
              <label>Password:</label>
              <Field name="password" component="input" type="password"/>
            </fieldset>
            <button type="submit" disabled={registering}>Register</button>
          </form>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    registering: state.user.registering,
    errorMessages: state.user.registerError,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ register }, dispatch)
}

Register = connect(mapStateToProps, mapDispatchToProps)(Register);
Register = reduxForm({ form: 'register' })(Register);
export default Register;

