import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { logout } from '../../../actions/user';

class Logout extends React.Component {

  componentWillMount() {
    this.props.logout();
    browserHistory.push('/');
  }

  render() {
    return (
      <div>Logging Out</div>
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(null, mapDispatchToProps)(Logout);
