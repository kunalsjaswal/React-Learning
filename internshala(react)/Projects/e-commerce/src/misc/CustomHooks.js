import { useEffect, useReducer } from "react"


const initials=[];
const costReducer=(currState,action)=>{
    switch (action.type) {
      case 'added':
          return [...currState,action.productId]
      case 'removed':
        return localStorage.removeItem("Products")
      default:
        return currState
    }
  }

  
  const usePersistedReducer=(reducer,initialState,key)=>{
    const [state,dispatch]=useReducer(reducer,initialState,
      initials=>{
        const persisted=localStorage.getItem(key);
        return persisted? JSON.parse(persisted):initials;
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(state));
    },[state,key]);

    return [state,dispatch]

  }

  export function useCost(key="Products"){

    return usePersistedReducer(costReducer,initials,key)

  }