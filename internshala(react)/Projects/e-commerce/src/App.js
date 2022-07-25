import './App.css';
import React, { memo, useReducer } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

export const TotalCost=React.createContext();
const initialState={
  cost:0,
  item:0,
  productId:[]
};

const initials=[

]

const reducer=(currState,action)=>{
  switch (action.type) {
    case 'added':
      return {...currState, cost: currState.cost + action.value, item: currState.item + action.products , productId:[...currState.productId,action.productId]}
    case 'removed':
      return {...currState, cost: currState.cost - action.value, item: currState.item - action.products , productId:currState.productId.filter(id=>id!==action.productId)}
    case 'increase-item-price':
      return {...currState, item: currState.item + action.items - 1}
    case 'reduce-item-price':
      return {...currState, item: currState.item - action.items}  
   
    
    default:
      return currState
  }
}

const reducer2=(currState,action)=>{
  switch (action.type) {
    case 'add-into-initials':
      return [...currState,{id:action.id,cost:action.price,items:action.items}]
    case 'remove-from-initials':
      return currState.filter(val => val.id!==action.id)
    
    case 'before-increase':
      return currState.filter(val => val.id!==action.id)
    case 'increase':
      return [...currState,{id:action.id,cost:action.price,items:action.items}]

    case 'before-decrease':
      return currState.filter(val => val.id!==action.id)
    case 'decrease':
      return [...currState,{id:action.id,cost:action.price,items:action.items}]

    
  }
}


function App() {

  const [cost,dispatch]=useReducer(reducer,initialState);
  const [cost2,dispatch2]=useReducer(reducer2,initials);
  return (
    <div>
      <TotalCost.Provider value={{costState: cost, costDispatch: dispatch,costState2:cost2,costDispatch2:dispatch2}}>
        <Navbar/>
      </TotalCost.Provider>
      <Footer/>
    </div>
  );
}

export default memo(App);
