import React from 'react'
import useCounterHook3 from './hooks/useCounterHook3'

const Counter2 = () => {

  const [state,dispatch]=useCounterHook3()
  return (
    <div>
        <div>Counter {state}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default Counter2