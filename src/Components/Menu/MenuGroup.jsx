import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuGroup extends Component {
  render() {
    const { items, addToOrder } = this.props;
    return items.map(item => <MenuItem key={item.name} item={item} addToOrder={addToOrder} />);
  }
}

export default MenuGroup;
