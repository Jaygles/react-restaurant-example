import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../Actions/index';
import MenuItem from '../../Components/Menu/MenuItem';
import Order from '../../Components/Order/Order';
import './Menu.css';

class Menu extends Component {
  renderMenu = items => {
    if (items !== null) {
      return Object.keys(items).map(key => {
        return (
          <div key={key} className="menu-section">
            <br />
            <MenuItem addToOrder={this.props.addToOrder} key={key} items={items[key]} />
          </div>
        );
      });
    } else {
      return null;
    }
  };
  render() {
    return (
      <div className="menu">
        <h1 className="menu-heading">Our Menu</h1>
        {this.renderMenu(this.props.menu)}
        <br />
        <Order order={this.props.order} removeFromOrder={this.props.removeFromOrder} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    menu: state.menu,
    order: state.order,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
