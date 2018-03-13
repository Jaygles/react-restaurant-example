import React, { Component } from 'react';

class Order extends Component {
  render() {
    const { order, removeFromOrder } = this.props;
    return order.map((item, i) => (
      <li className="menu-item" key={`${item.name}${i}`}>
        {item.name}
        <span onClick={() => removeFromOrder(item)}>{item.price / 100 * item.count} &times;</span>
      </li>
    ));
  }
}

export default Order;
