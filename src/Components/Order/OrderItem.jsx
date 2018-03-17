import React, { Component } from 'react';
import { formatPrice } from '../../helpers';

class OrderItem extends Component {
  state = {
    orderClass: 'no_selection',
  };
  handleRemoveFromOrderClick = item => {
    // If item isn't last do the animation
    if (item.count > 1) {
      this.setState({ orderClass: 'no_selection remove-clicked' });
      setTimeout(() => {
        this.setState({ orderClass: 'no_selection' });
      }, 65);
    }
    this.props.removeFromOrder(item);
  };
  render() {
    const { item, removeFromOrder } = this.props;
    return (
      <li className="menu-item">
        {item.count}x {item.name}
        <span
          className={this.state.orderClass}
          onClick={() => this.handleRemoveFromOrderClick(item)}
        >
          {formatPrice(item.price * item.count)} &times;
        </span>
      </li>
    );
  }
}

export default OrderItem;
