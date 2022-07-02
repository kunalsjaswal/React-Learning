import React from 'react'
import useCounterHook2 from './hooks/useCounterHook2'

const Counter1 = () => {

  const [count,increment,decrement,reset]=useCounterHook2()
  return (
    <div>
        <div>Counter {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter1