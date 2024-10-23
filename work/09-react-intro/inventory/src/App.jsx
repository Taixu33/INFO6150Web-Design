import React, { useState } from 'react';
import Reorder from './Reorder';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReorder = () => setCount(5);

  return (
    <div className="app">
      <h1 className='title'>Inventory Count: {count}</h1>
      <button className='button' onClick={decrement} disabled={!count}>-</button>
      <button className='button' onClick={increment}>+</button>
      {count === 0 && <Reorder onReorder={handleReorder} />}
    </div>
  );
}

export default App;
