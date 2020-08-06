import React from 'react';
import './App.css';
import Box from './components/Box'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 2 })
  }

  const decrement = () => {
    dispatch({ type: "DECREMENT" })
  }

  const setCount = () => {
    dispatch({type: "RESET"})
  }

  return (

    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Box />
    </div>
  );
}

export default App;
