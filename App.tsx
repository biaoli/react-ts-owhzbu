import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [ count, setCount ] = useState(0);
  return (
    <div>
      <p>count is {count} times</p>
      <button type='button' onClick = {() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
