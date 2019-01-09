import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      editing: false,
      editingIndex: "",
      todos: JSON.parse(localStorage.getItem("todos")) || []
    };
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

  addTodo = () => {
    const newTodo = {
      name: this.state.newTodo,
      id: this.generateTodoId()
    };

    const todos = this.state.todos;
    todos.push(newTodo);

    this.setState({
      todos: todos,
      newTodo: ""
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  deleteTodo = index => {
    const todos = this.state.todos;
    todos.splice(index, 1);

    this.setState({
      todos: todos
    });

    localStorage.setItem("todos", JSON.stringify(todos));
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
      editingIndex: null
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  };

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
                  <li key={item.id} className="list-group-item">
                    {item.name}

                    <button
                      className="btn btn-danger float-right btn-sm"
                      onClick={() => {
                        this.deleteTodo(index);
                      }}
                    >
                      Remove
                    </button>

                    <button
                      className="btn btn-info float-right btn-sm"
                      onClick={() => {
                        this.editTodo(index);
                      }}
                    >
                      Edit
                    </button>
                  </li>
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
