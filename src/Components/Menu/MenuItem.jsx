import React, { Component } from 'react';
import { formatPrice } from '../../helpers';

class MenuItem extends Component {
  state = {
    open: false,
    sectionClass: 'section',
    arrowClass: 'arrow down',
    orderClass: 'no_selection',
  };
  handleItemClick = () => {
    if (this.state.open) {
      this.setState({
        open: false,
        arrowClass: 'arrow down',
        sectionClass: 'section',
      });
    } else {
      this.setState({
        open: true,
        arrowClass: 'arrow up',
        sectionClass: 'section open',
      });
    }
  };
  handleAddToOrderClick = item => {
    this.props.addToOrder(item);
    this.setState({ orderClass: 'no_selection clicked' });
    setTimeout(() => {
      this.setState({ orderClass: 'no_selection' });
    }, 75);
  };
  render() {
    const { item, addToOrder } = this.props;
    return (
      <div className={this.state.sectionClass}>
        <li className="menu-item" key={item.name}>
          <div className="menu-item-opener" onClick={() => this.handleItemClick()}>
            {item.name}
            <i className={this.state.arrowClass} />
          </div>
          <span
            role="menuitem"
            className={this.state.orderClass}
            onClick={() => this.handleAddToOrderClick(item)}
          >
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
