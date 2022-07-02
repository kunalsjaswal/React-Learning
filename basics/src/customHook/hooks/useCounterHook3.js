import {useReducer} from 'react'

// useReducer using custom hooks 
const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

const useCounterHook3 = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return [state,dispatch]
}

export default useCounterHook3