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

  handleChange(event) {
    console.log(event.target.name, event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD REACT</h1>
        </header>

        <div className="container">
          <div className="form-group text-left">
            <label>Add to todos</label>
            <input
              type="text"
              todo={"todo"}
              className="form-control"
              placeholder="Enter text to add todo"
              onChange={this.handleChange}
            />
          </div>
          <ul className="list-group text-left">
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
