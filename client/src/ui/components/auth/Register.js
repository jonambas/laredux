import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Register extends Component {

  render() {
    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%'}}>
        <div className="col-xs-5">
          <h3>Register</h3>
          <h6>Nothing here yet</h6>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Register)
