import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
    this.tickId;
  }

  componentDidMount() {
    this.tickId = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    this.tickId = null
  }

  render() {
    return <div onClick={this.handleClick}>
      It is {this.state.date.toLocaleTimeString()}
      <ul>
        {
          [1, 2].map((item) => <li key={item}>{item}</li>)
        }
      </ul>
      <input value={'123'} />
    </div>
  }
}

render(<App />, document.querySelector('#root'))
