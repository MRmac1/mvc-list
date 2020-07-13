// 还是设置 count + / -，使用store进行连接
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import List from './components/List';
import About from './components/About';
import store from './store';
import { connect, Provider } from 'react-redux';
import { add, minus, asyncAdd, asyncMinus } from './actions';

import './app.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  onButtonClick(type) {
    this.props.asyncAdd(type);
  }

  render() {
    return <Router>
      <section>
        <nav className='nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <section className='page-content'>
          <Switch>
              <Route path="/list">
                <List />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </section>
      </section>
    </Router>
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = { add, minus, asyncAdd, asyncMinus, dispatch: store.dispatch }

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(<Provider store={store}><WrappedApp /></Provider>, document.querySelector('#root'));
