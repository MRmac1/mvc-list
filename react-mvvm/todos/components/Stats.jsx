import React, { Component } from 'react';

export default (props) => {
  const { completed, remaining } = props;
  return <footer className="footer">
    <span className="todo-count"><strong>{ remaining }</strong>{ remaining === 1 ? 'item' : 'items' } left</span>
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
      { completed && <button className="clear-completed">Clear completed</button>}
  </footer>
}
