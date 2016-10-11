import React, { Component } from 'react';
import Header from '../components/Header';

export default class MainLayout extends Component {
  render() {
    return (
      <div style={{ height: '100%'}}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
