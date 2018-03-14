import React, { Component } from 'react';
import { formatPrice } from '../../helpers';

class Order extends Component {
  calculateTotal = order => {
    if (order[0] === undefined) {
      return 0;
    }
    let total = 0;
    order.forEach(order => (total += order.price * order.count));
    return total;
  };
  render() {
    const { order, removeFromOrder } = this.props;
    const taxRate = 0.09;
    const tax = order[0] !== undefined ? this.calculateTotal(order) * taxRate : 0;
    return (
      <div className="order-section">
        <p>Order</p>
        {order.map((item, i) => (
          <li className="menu-item" key={`${item.name}${i}`}>
            {item.count}x {item.name}
            <span className="no_selection" onClick={() => removeFromOrder(item)}>
              {formatPrice(item.price * item.count)} &times;
            </span>
          </li>
        ))}
        <div>
          <li className="menu-item">
            Tax:<span>{formatPrice(tax)}&nbsp;&nbsp;&nbsp;</span>
          </li>
          <li className="menu-item">
            <br />
            Total:<span>{formatPrice(this.calculateTotal(order) + tax)}&nbsp;&nbsp;&nbsp;</span>
          </li>
        </div>
      </div>
    );
  }
}

export default Order;
