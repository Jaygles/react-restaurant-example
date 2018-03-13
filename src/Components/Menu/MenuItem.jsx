import React from 'react';

function MenuItem(props) {
  return props.items.map(item => (
    <li className="menu-item" key={item.name}>
      {item.name}
      <span onClick={() => props.addToOrder(item)}>{item.price / 100} +</span>
    </li>
  ));
}

export default MenuItem;
