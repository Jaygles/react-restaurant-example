import React, { Component } from 'react';
import { formatPrice } from '../../helpers';

class Order extends Component {
  calculateTotal = order => {
    let total = 0;
    order.forEach(order => (total += order.price * order.count));
    console.log(total);
    return total;
  };
  render() {
    const { order, removeFromOrder } = this.props;
    const tax = order[0] !== undefined ? this.calculateTotal(order) * 0.09 : 0;
    console.log(order);
    return (
      <div className="order-section">
        {order[0] ? <p>Order</p> : null}
        {order.map((item, i) => (
          <li className="menu-item" key={`${item.name}${i}`}>
            {item.count}x {item.name}
            <span className="no_selection" onClick={() => removeFromOrder(item)}>
              {formatPrice(item.price * item.count)} &times;
            </span>
          </li>
        ))}
        {order[0] !== undefined ? (
          <div>
            <li className="menu-item">
              Tax:<span>{formatPrice(tax)}&nbsp;&nbsp;&nbsp;</span>
            </li>
            <li className="menu-item">
              <br />
              Total:<span>{formatPrice(this.calculateTotal(order) + tax)}&nbsp;&nbsp;&nbsp;</span>
            </li>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Order;
