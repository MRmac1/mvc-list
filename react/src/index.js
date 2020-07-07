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
    return <div>
      It is {this.state.date.toLocaleTimeString()}
    </div>
  }
}

render(<App />, document.querySelector('#root'))
