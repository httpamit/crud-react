import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD REACT</h1>
        </header>

        <div className="container">
          <ul className="list-group">
            <li className="list-group-item"></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
