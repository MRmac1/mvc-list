import React, { Component, PureComponent } from 'react';
import AppContext from '../context';

export default class Footer extends Component {
  constructor() {
    super();
  }

  static contextType = AppContext;

  render() {
    const { todos, dispatchState } = this.context;

    const remaining = 0;
    const completed = false;

    return <footer className="footer">
            <span className="todo-count"><strong>{remaining}</strong> {remaining === 1 ? 'item' : 'items'} left</span>
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Compeleted</a>
              </li>
            </ul>
            { completed && <button clclassNameass="clear-completed">Clear completed</button> }
          </footer>;
    }
}
