import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMenu } from '../../Actions/index';
import Menu from '../../Containers/Menu/Menu';
import Home from '../Home/Home';
import Location from '../Location/Location';
import './Main.css';

class Main extends Component {
  componentDidMount() {
    this.props.loadMenu.loadMenu();
  }

  activePage = pageChoice => {
    switch (pageChoice) {
      case 'Home':
        return <Home />;
      case 'Menu':
        return <Menu />;
      case 'Location':
        return <Location />;
      default:
        return <Home />;
    }
  };

  render() {
    return <main>{this.activePage(this.props.main)}</main>;
  }
}

function mapStateToProps(state) {
  return {
    main: state.main,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMenu: bindActionCreators({ loadMenu }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
