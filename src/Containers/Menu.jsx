import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMenu } from '../Actions/index';
import { bindActionCreators } from 'redux';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  renderApps(apps) {
    if ((apps) !== null){
      return (
        <div className="menu-section">
          {apps.map(app => {
            return (
              <li className="menu-item" key={app.name}>{app.name} <span>{app.price}</span></li>
            )
          })}
        </div>
      )
    } else {
      return null;
    }
  }

  renderMains(mains) {
    if ((mains) !== null){
      return (
        <div className="menu-section">
          {mains.map(main => {
            return (
              <li className="menu-item" key={main.name}>{main.name} <span>{main.price}</span></li>
            )
          })}
        </div>
      )
    } else {
      return null;
    }
  }

  renderDeserts(deserts) {
    if ((deserts) !== null){
      return (
        <div className="menu-section">
          {deserts.map(desert => {
            return (
              <li className="menu-item" key={desert.name}>{desert.name} <span>{desert.price}</span></li>
            )
          })}
        </div>
      )
    } else {
      return null;
    }
  }

  renderDrinks(drinks) {
    if ((drinks) !== null){
      return (
        <div className="menu-section">
          {drinks.map(drink => {
            return (
              <li className="menu-item" key={drink.name}>{drink.name} <span>{drink.price}</span></li>
            )
          })}
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className="menu">
        <p>Menu</p>
        <br />
        {this.renderApps(this.props.menu.appetiser || null)}
        <br />
        {this.renderMains(this.props.menu.main || null)}
        <br />
        {this.renderDeserts(this.props.menu.desert || null)}
        <br />
        {this.renderDrinks(this.props.menu.drink || null)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMenu: bindActionCreators({loadMenu}, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);