import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/containers/Main.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;
