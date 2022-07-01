import React, { useReducer } from 'react'

const intialState=0

const reducer=(currState,action)=>{
    switch(action){
        case 'increment':
            return currState+1
        case 'decrement':
            return currState-1
        case 'reset':
            return intialState
        default:
            return currState
    }
}
const MultipleReducer = () => {
    const [count,dispatch]=useReducer(reducer,intialState)
    const [count2,dispatch2]=useReducer(reducer,intialState)
    
  return (
    <div>
        <nav>Multiple reducers</nav>
        <div className="display">Count - {count}</div>
        <div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>decrement</button>
            <button onClick={()=> dispatch('reset')}>reset</button>
        </div>
        <div className="display">Count2 - {count2}</div>

        <div>
            <button onClick={()=> dispatch2('increment')}>Increment</button>
            <button onClick={()=> dispatch2('decrement')}>decrement</button>
            <button onClick={()=> dispatch2('reset')}>reset</button>
        </div>
    </div>
  )
}

export default MultipleReducer