import React, { Component } from "react";

class ListItem extends Component {
  render() {
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
  }
}

export default ListItem;
