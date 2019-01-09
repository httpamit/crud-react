import React, { Component } from "react";

import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

import ListItem from "./ListItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      editing: false,
      editingIndex: null,
      notification: null,
      notificationClass: null,
      todos: []
    };

    this.apiURL = "https://5c344916e0948000147a78bf.mockapi.io";
  }

  async componentDidMount() {
    const response = await axios.get(`${this.apiURL}/todos`);
    this.setState({
      todos: response.data
    });
  }

  handleChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  generateTodoId = () => {
    const lastTodo = this.state.todos[this.state.todos.length - 1];

    if (lastTodo) {
      return lastTodo.id + 1;
    } else {
      return 1;
    }
  };

  async addTodo = () => {
    const newTodo = {
      name: this.state.newTodo,
      id: this.generateTodoId()
    };

    const response = await axios.post(`${this.apiURL}/post`, {
      name: this.state.newTodo
    });

    console.log(response);

    const todos = this.state.todos;
    todos.push(newTodo);

    this.setState({
      todos: todos,
      newTodo: "",
      notificationClass: "alert-success"
    });

    this.alert("Todo added successfully!");
  };

  deleteTodo = index => {
    const todos = this.state.todos;
    todos.splice(index, 1);

    this.setState({
      todos: todos,
      notificationClass: "alert-danger"
    });

    this.alert("Todo deleted successfully!");
  };

  editTodo = index => {
    const todo = this.state.todos[index];
    this.setState({
      editing: true,
      newTodo: todo.name,
      editingIndex: index
    });
  };

  updateTodo = () => {
    const todo = this.state.todos[this.state.editingIndex];
    todo.name = this.state.newTodo;

    const todos = this.state.todos;
    todos[this.state.editingIndex] = todo;

    this.setState({
      todos: todos,
      editing: false,
      newTodo: "",
      editingIndex: null,
      notificationClass: "alert-info"
    });

    this.alert("Todo updated successfully!");
  };

  alert = notification => {
    this.setState({
      notification
    });

    setTimeout(() => {
      this.setState({
        notification: null
      });
    }, 2000);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD REACT</h1>
        </header>

        <div className="container">
          {/* display notification message */}

          {this.state.notification && (
            <div className={"alert " + this.state.notificationClass}>
              <div className="text-left">{this.state.notification}</div>
            </div>
          )}

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
                disabled={this.state.newTodo.length < 5}
                onClick={this.state.editing ? this.updateTodo : this.addTodo}
              >
                {this.state.editing ? "Update todo" : "Add todo"}
              </button>
            </div>
          </div>
          {!this.state.editing && (
            <ul className="list-group text-left">
              {this.state.todos.map((item, index) => {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    editTodo={() => {
                      this.editTodo(index);
                    }}
                    deleteTodo={() => {
                      this.deleteTodo(index);
                    }}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
