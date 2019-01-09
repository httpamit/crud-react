import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      todos: [
        {
          id: 1,
          name: 'Play Golf'
        },
        {
      id: 1,
          name: 'Play Golf'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD REACT</h1>
        </header>

        <div className="container">
          <ul className="list-group">
            <li className="list-group-item">Some list item</li>
            <li className="list-group-item">Some list item</li>
            <li className="list-group-item">Some list item</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
