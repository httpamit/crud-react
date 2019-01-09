import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          name: "Play Golf"
        },
        {
          id: 2,
          name: "Buy some clothes"
        },
        {
          id: 3,
          name: "Write some code"
        },
        {
          id: 4,
          name: "Watch movies"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD REACT</h1>
        </header>

        <div className="container">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
          <ul className="list-group">
            {this.state.todos.map((item, index) => {
              return (
                <li key={item.id} className="list-group-item">
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;