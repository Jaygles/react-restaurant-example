import React, { Component } from 'react';
import { formatPrice } from '../../helpers';

class MenuItem extends Component {
  state = {
    open: false,
    class: 'section',
  };
  handleClick = () => {
    if (this.state.open) {
      this.setState({
        open: false,
        class: 'section',
      });
    } else {
      this.setState({
        open: true,
        class: 'section open',
      });
    }
  };
  render() {
    const { item, addToOrder } = this.props;
    return (
      <div className={this.state.class}>
        <li className="menu-item" key={item.name}>
          <div className="menu-item-opener" onClick={() => this.handleClick()}>
            {item.name}
          </div>
          <span role="menuitem" className="no_selection" onClick={() => addToOrder(item)}>
            {formatPrice(item.price)} +
          </span>
        </li>
        <div className="menu-item-desc">
          <div className="menu-item-desc-wrap">
            <img className="menu-img" src={item.img} />
            <p className="menu-desc">{item.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
