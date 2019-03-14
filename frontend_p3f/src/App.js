import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Routes />
      </div>
    );
  }
}

export default App;
