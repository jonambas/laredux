import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { logout } from '../../../actions/user';

class Logout extends Component {

  componentWillMount() {
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    return (
      <div></div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
} 
export default connect(null, mapDispatchToProps)(Logout);
