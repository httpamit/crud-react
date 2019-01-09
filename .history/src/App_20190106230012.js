import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",

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

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  addTodo() {
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length - 1].id + 1
    };

    const oldTodos = this.state.todos;
    oldTodos.push(newTodo);

    this.setState({
      todos: oldTodos
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD REACT</h1>
        </header>

        <div className="container">
          <div className="input-group mb-3 text-left">
            <input
              type="text"
              name={"todo"}
              className="form-control"
              placeholder="Enter text to add todo"
              onChange={this.handleChange}
              value={this.state.newTodo}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                onClick={this.addTodo}
              >
                Add Todo
              </button>
            </div>
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
