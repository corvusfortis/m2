import React, { useState } from 'react';

const NotOptimizedComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <h1>Not Optimized Component</h1>
      <p>Count: {count}</p>
      <button onClick = {handleIncrement}>Increment</button>
      <button onClick = {handleDecrement}>Decrement</button>
      <input type="text" value={text} onChange = {handleTextChange}/>
      <p>You typed: {text}</p>
    </div>
  );
};

export default NotOptimizedComponent;