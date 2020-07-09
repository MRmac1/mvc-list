import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const App = () => {
  const textRef = React.createRef();

  const [showInput, setShowInput] = useState(true)
  const [textValue, setTextValue] = useState('Hello world!');
  const [countNum, setCountNum] = useState(0);

  useSetDomTimeTick(textRef);

  return <div>
    <div>
      <label>
        input your name please:
      </label>
      <span>
        <input ref={textRef} defaultValue={textValue} />
      </span>
    </div>

    <div onClick={() => console.log('bubble to div', countNum)}>
      <label>
        count up:
      </label>
      <span>
        <button onClick={(e) => { e.stopPropagation(); setCountNum(countNum + 1) }}>click me!</button>
      </span>
    </div>

    <p>now countNum is {countNum}</p>
  </div>
}

// 设置计数器
function useSetDomTimeTick(ref) {

  const [timeCount, setTimeCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => setTimeCount(timeCount + 1), 1000);
    ref.current.value = 'useSetDomTimeTick ' + timeCount;
    return () => { clearInterval(timerId) }
  });
}

render(<App />, document.querySelector('#root'))
