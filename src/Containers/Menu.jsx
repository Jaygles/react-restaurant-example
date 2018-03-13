import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../Actions/index';
import MenuItem from '../Components/Menu/MenuItem';

class Menu extends Component {
  renderMenu = items => {
    if (items !== null) {
      Object.keys(items).map((key, i) => {
        return (
          <div key={key} className="menu-section">
            Hello
            {/* <MenuItem key={key} items={items[key]} /> */}
          </div>
        );
      });
    } else {
      return null;
    }
  };
  renderApps = apps => {
    if (apps !== null) {
      return (
        <div className="menu-section">
          {apps.map(item => {
            return <MenuItem item={item} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  };
  renderMains = mains => {
    if (mains !== null) {
      return (
        <div className="menu-section">
          {mains.map(item => {
            return <MenuItem item={item} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  };
  renderDeserts = deserts => {
    if (deserts !== null) {
      return (
        <div className="menu-section">
          {deserts.map(item => {
            return <MenuItem item={item} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  };
  renderDrinks = drinks => {
    if (drinks !== null) {
      return (
        <div className="menu-section">
          {drinks.map(item => {
            return <MenuItem item={item} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="menu">
        <p>Menu</p>
        {this.renderMenu(this.props.menu || null)}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
