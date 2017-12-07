import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';

class Main extends Component {

  ping() {
    axios.get("http://localhost:8080/pong").then(res => {
      alert("Received Successful response from server!");
    }, err => {
      alert("Server rejected response with: " + err);
    });
  }

  render() {
    return (
      <div className="Main">
        <header className="App-header">
          <h1 className="App-title">Ping</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.ping}>Ping!</button>
        </p>
      </div>
    );
  }
}

export default Main;
