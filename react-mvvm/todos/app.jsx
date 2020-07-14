import React, { useState, useContext } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import Main from './components/Main';
import Stats from './components/Stats';
import Footer from './components/Footer';

import AppContext from './context';
import store from './redux/store';
import { addOne, todoToggle } from './redux/actions';

const App = (props) => {

  const { todos } = props;

  const [ newTodoTitle, setNewTodoTitle ] = useState('');

  const keyPress = (e) => {
    if (e.which === 13 && newTodoTitle) {
      const { addOne } = props;
      addOne({
        title: newTodoTitle,
        completed: false,
        id: todos[todos.length - 1] && (todos[todos.length - 1].id + 1) || 1
      })
    }
  }

  return <AppContext.Provider value={props}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus=""
            value={newTodoTitle}
            onKeyPress={keyPress}
            onChange={(e) => setNewTodoTitle(e.target.value)} />
        </header>
        <Main />
        <Stats />
      </section>
      <Footer />
    </AppContext.Provider>
}


const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const mapDispatchToProps = { addOne, todoToggle }

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);


render(<Provider store={store}><WrappedApp /></Provider>, document.querySelector('#root'))
