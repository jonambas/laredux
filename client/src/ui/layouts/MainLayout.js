/* eslint-disable react/forbid-prop-types */

import React, { PropTypes } from 'react';
import Header from '../components/Header';

class MainLayout extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;
