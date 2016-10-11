import React, { Component } from 'react';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="flex center-xs middle-xs" style={{ height: '100%'}}>
        <div className="col-xs-12" >
          <h1>You are logged in</h1>
        </div>
      </div>
    );
  }
}
