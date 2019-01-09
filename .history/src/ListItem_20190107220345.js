import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.item.name}

        <button
          className="btn btn-danger float-right btn-sm"
          onClick={this.props.deleteTodo}
        >
          Remove
        </button>

        <button
          className="btn btn-info float-right btn-sm"
          onClick={this.props.editTodo}
        >
          Edit
        </button>
      </li>
    );
  }
}

export default ListItem;
