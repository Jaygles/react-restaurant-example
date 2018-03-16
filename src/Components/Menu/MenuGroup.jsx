import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { uppAndPlu } from '../../helpers';

class MenuGroup extends Component {
  render() {
    const { items, addToOrder, index } = this.props;
    return (
      <div>
        <h3>{uppAndPlu(index)}</h3>
        {items.map(item => <MenuItem key={item.name} item={item} addToOrder={addToOrder} />)}
      </div>
    );
  }
}

export default MenuGroup;
