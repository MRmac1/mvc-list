// 还是设置 count + / -，使用store进行连接
import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { connect, Provider } from 'react-redux';
import { add, minus } from './actions'

class App extends React.Component {
  constructor() {
    super();
  }

  onButtonClick(type) {
    this.props[type](); // 不需要调用 store.dispatch 修改state
  }

  render() {
    const { count } = this.props;
    return <section>
            <div>
              <button onClick={this.onButtonClick.bind(this, 'add')}>add 1</button>
              <button onClick={this.onButtonClick.bind(this, 'minus')}>minus 1</button>
            </div>
            <div>
              count number now is {count}
            </div>
          </section>;
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = { add, minus }

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(<Provider store={store}><WrappedApp /></Provider>, document.querySelector('#root'));
