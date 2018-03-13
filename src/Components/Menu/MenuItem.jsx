import React from 'react';

function MenuItem() {
  const { items } = this.props;
  console.log(this);
  return items.map(item => (
    <li key={item.name}>
      {item.name}
      <span>{item.price}</span>
    </li>
  ));
}

export default MenuItem;
