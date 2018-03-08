import React, { Component } from 'react';
import Header from '../Containers/Header';
import Main from './Main/Main';
import Footer from '../Containers/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
