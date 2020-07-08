import React, { Component } from 'react';
import AppContext from '../context';

export default class TodoItem extends Component {
  constructor() {
    super();
  }

  static contextType = AppContext;

  todoToggle = (id, e) => {
    const { todos, dispatchState } = this.context;

    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
    dispatchState('todos', newTodos)
  }

  deleteItem(id, e) {
    const { todos, dispatchState } = this.context;
    const newTodos = todos.filter(todo => todo.id !== id);
    dispatchState('todos', newTodos)
  }

  render() {
    const { todos } = this.context;
    const { completed, title, id } = this.props;
    return <li className={completed ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={completed} onChange={this.todoToggle.bind(this, id)}/>
              <label>{title}</label>
              <button className="destroy" onClick={this.deleteItem.bind(this, id)}/>
            </div>
            <input className="edit" defaultValue={title} />
          </li>;
  }
}
