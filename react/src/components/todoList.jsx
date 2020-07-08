import React, { Component } from 'react';
import Todo from './todoItem';
// import AppContext from '../context';

class TodoList extends Component {
  constructor() {
    super();
  }

  // static contextType = AppContext;

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { todos, dispatchState } = this.props;
    return <section className="main">
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          { todos.map((item) => <Todo key={item.id} id={item.id} completed={item.completed} title={item.title} dispatchState={dispatchState} todos={todos} />) }
        </ul>
      </section>
  }
}

export default TodoList;
