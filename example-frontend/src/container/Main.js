import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {ponged: 'Not Ponged'}

    this.ping = this.ping.bind(this);
  }

  ping() {
    axios.get("http://localhost:8080/pong").then(res => {
      alert("Received Successful response from server!");
      this.setState({ponged: 'Ponged! '});
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
          <div>
            <button onClick={this.ping}>Ping!</button>
            <div>Ponged: {this.state.ponged}</div>
          </div>
        </p>
      </div>
    );
  }
}

export default Main;
