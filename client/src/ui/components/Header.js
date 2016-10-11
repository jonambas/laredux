import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends React.Component {

  renderPreAuth() {
    return (
      <ul className="text--right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    )
  }

  renderPostAuth() {
    return (
      <ul className="text--right">
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    )
  }

  render() {
    const { authenticated } = this.props;
    
    return (
      <nav>
        {!authenticated ? this.renderPreAuth() : this.renderPostAuth()}
      </nav>
    );
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated
  };
}

export default connect(mapStateToProps)(Header);
