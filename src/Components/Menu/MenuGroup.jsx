import React from 'react';
import MenuItem from './MenuItem';
import { uppAndPlu } from '../../helpers';

function MenuGroup(props) {
  const { items, addToOrder, index } = props;
  return (
    <div>
      <h3>{uppAndPlu(index)}</h3>
      {items.map(item => <MenuItem key={item.name} item={item} addToOrder={addToOrder} />)}
    </div>
  );
}

export default MenuGroup;
