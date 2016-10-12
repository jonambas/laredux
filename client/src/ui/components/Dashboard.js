import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%' }}>
        <div className="col-xs-12" >
          <h1>Hi, {this.props.name}</h1>
          <p>You are logged in</p>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  name: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    name: state.user.name,
  };
}

export default connect(mapStateToProps)(Dashboard);
