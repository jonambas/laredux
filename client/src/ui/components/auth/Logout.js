import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { logout, resetUser } from '../../../actions/user';

class Logout extends Component {

  componentWillMount() {
    const { logout, resetUser } = this.props;
    logout();
    resetUser();
    browserHistory.push('/');
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout, resetUser }, dispatch)
} 
export default connect(null, mapDispatchToProps)(Logout);
