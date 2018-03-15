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
        <div className="nav-btn-wrap">
          <button className="nav-btn" onClick={() => activePage('Home')}>
            Home
          </button>
          <button className="nav-btn" onClick={() => activePage('Menu')}>
            Menu
          </button>
          <button className="nav-btn" onClick={() => activePage('Location')}>
            Location
          </button>
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
