import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './components/todoList';
import Footer from './components/footer';

import AppContext from './context';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todoInputVal: ''
    }
  }

  onTodoInputValChange = (e) => {
    this.setState({ todoInputVal: e.target.value });
  }

  createItem = (e) => {
    const { todoInputVal, todos } = this.state;
    if (e.which === 13 && todoInputVal !== '') {
      const todo = this.getNewAttribute(todoInputVal);
      this.setState({
        todos: [...todos, todo],
        todoInputVal: '',
        hasError: false
      })
    }
  }

  getNewAttribute(value) {
    const { todos } = this.state;
    return {
      completed: false,
      title: value,
      id: todos[todos.length - 1] && (todos[todos.length - 1].id + 1) || 1
    }
  }

  dispatchState = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  getAppContextValue = () => {
    const { todos } = this.state;
    return {
      todos,
      dispatchState: this.dispatchState
    }
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    alert(error, errorInfo);
  }

  render() {
    const { todoInputVal, hasError, todos } = this.state;

    if (hasError) {
      return <h1>some error happend</h1>
    }

    return (<AppContext.Provider value={this.getAppContextValue()}>
            <section className="todoapp">
              <header className="header">
                <h1>todos</h1>
                <input value={todoInputVal} className="new-todo" placeholder="What needs to be done?" autoFocus="" onKeyPress={this.createItem} onChange={this.onTodoInputValChange} />
              </header>
              <TodoList todos={todos} dispatchState={this.dispatchState} />
              <Footer />
            </section>
            <footer className="info">
              <p>Double-click to edit a todo</p>
              <p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
              <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
          </AppContext.Provider>)
  }
}

render(<App />, document.querySelector('#root'))
