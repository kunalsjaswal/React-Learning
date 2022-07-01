import React,{useReducer} from 'react'
//step 1: defining intial state
const initialState=0

// simple useReducer =>
//step2 : defining reducer function
const reducer=(currState,action)=>{
    switch (action) {
        case 'increment':
            return currState+1
        case 'decrement':
            return currState-1
        case 'reset':
            return initialState    
        default:
            return currState
    }

}

const CounterReducer = () => {

    const [count,dispatch]= useReducer(reducer,initialState)
    // count is the current state , and
    // dispatch is the method which help us to use action  in reducer function 

  return (
    <div>
        <nav>useReducer Tut</nav>
        <div>Count - {count}</div>
        <div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>

    </div>
  )
}

export default CounterReducer