import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activePage } from '../../Actions/index';
import { bindActionCreators } from 'redux';
import './Header.css';

class Header extends Component {
  render() {
    const { activePage } = this.props.activePage;
    return (
      <header>
        <h2>Our Restaurant</h2>
        <div>
          <button onClick={() => activePage('Home')}>Home</button>
          <button onClick={() => activePage('Menu')}>Menu</button>
          <button onClick={() => activePage('Location')}>Location</button>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    activePage: bindActionCreators({ activePage }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
