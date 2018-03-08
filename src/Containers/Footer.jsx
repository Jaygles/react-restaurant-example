import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../Actions/index';
import { bindActionCreators } from 'redux';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <footer>
        <div>
          <p>&copy; Jacob Sullivan 2017</p>
        </div>
      </footer>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);