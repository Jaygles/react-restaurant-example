import React from 'react';
import { formatPrice } from '../../helpers';

function MenuItem(props) {
  return props.items.map(item => (
    <li className="menu-item" key={item.name}>
      {item.name}
      <span className="no_selection" onClick={() => props.addToOrder(item)}>
        {formatPrice(item.price)} +
      </span>
    </li>
  ));
}

export default MenuItem;
