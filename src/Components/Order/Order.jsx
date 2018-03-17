import React, { Component } from 'react';
import OrderItem from './OrderItem';
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
          <OrderItem key={i} item={item} removeFromOrder={removeFromOrder} />
        ))}
        <div>
          <li className="menu-item">
            Tax ({taxRate * 100}%):<span>{formatPrice(tax)}&nbsp;&nbsp;&nbsp;</span>
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
