import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import { register } from '../../../actions/userApi';

class Register extends React.Component {

  componentDidMount() {
    const { authenticated } = this.props;
    if (authenticated) {
      browserHistory.push('/dashboard');
    }
  }

  render() {
    const { handleSubmit, registering, errorMessages } = this.props;

    const onSubmit = handleSubmit(credentials => this.props.register(credentials));

    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%' }}>
        <div className="col-xs-10 col-md-6 col-lg-4">
          <h3>Registration</h3>

          <form onSubmit={onSubmit} >
            <fieldset>
              <p>{ errorMessages && errorMessages.name ? errorMessages.name : ''}</p>
              <label htmlFor="name">Name</label>
              <Field name="name" component="input" type="text" />
            </fieldset>
            <fieldset>
              <p>{ errorMessages && errorMessages.email ? errorMessages.email : ''}</p>
              <label htmlFor="email">Email</label>
              <Field name="email" component="input" type="text" />
            </fieldset>
            <fieldset>
              <p>{ errorMessages && errorMessages.password ? errorMessages.password : ''}</p>
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
  errorMessages: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated,
    registering: state.user.registering,
    errorMessages: state.user.registerErrors,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ register }, dispatch);
}

export default reduxForm({
  form: 'register',
})(connect(mapStateToProps, mapDispatchToProps)(Register));

