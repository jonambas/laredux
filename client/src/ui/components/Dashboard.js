import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user';

class Dashboard extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%'}}>
        <div className="col-xs-12" >
          <h1>Hi, {user.name}</h1>
          <p>You are logged in</p> 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch)
}

Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Dashboard;
