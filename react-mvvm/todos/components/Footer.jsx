import React, { Component } from 'react';

export default (props) => {
  const { todos } = props;
  return <footer className="info">
    <p>Double-click to edit a todo</p>
    <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>;
}
