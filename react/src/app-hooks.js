import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const App = () => {
  console.log('this', this);

  const [welcome, setWelcome] = useState('Hello world!');
  useEffect(() => {
    setWelcome('haha')
  }, [])
  return <div>{welcome}</div>
}

render(<App />, document.querySelector('#root'))
