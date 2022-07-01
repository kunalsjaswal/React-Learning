import './App.css';
import React,{useReducer} from 'react';
import ConditionalRender from './components/ConditionalRender';
import Events from './components/Events';
import Form from './components/Form';
import ListRender from './components/ListRender';
import Parent from './components/Parent';
import Sample1 from './components/Sample1';
import DataFetching from './dataFetch/DataFetching';
import CompA from './react hooks/useContext/CompA';
import UseEffect from './react hooks/UseEffect';
import UseEffectCounter from './react hooks/UseEffectCounter';
import UseEffectOnce from './react hooks/UseEffectOnce';
import UseEffectOnce2 from './react hooks/UseEffectOnce2';
import UseState from './react hooks/UseState';
import CounterReducer from './react hooks/useReducer/CounterReducer';
import CounterComplexReducer from './react hooks/useReducer/CounterComplexReducer';
import MultipleReducer from './react hooks/useReducer/MultipleReducer';
import ComponentA from './react hooks/useReducerANDuseContext/ComponentA';
import ComponentB from './react hooks/useReducerANDuseContext/ComponentB';
import ComponentC from './react hooks/useReducerANDuseContext/ComponentC';
import DataFetchingUseState from './dataFetch/DataFetchingUseState';
import DatafetchingUseReducer from './dataFetch/DatafetchingUseReducer';

export const UserContext= React.createContext()
export const CourseContext=React.createContext()


// global reducer 
export const CountContext=React.createContext()

const initialState=0
const reducer=(currState,action)=>{
  switch(action){
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



function App() {

  // global useReducer 
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
    
    {/* <Sample1  navTitle="useState Demonstration"/> */}       
    {/* <Events navTitle="Events handling"/> */}
    {/* <Parent parent="mummy papa"/> */}
    {/* <ConditionalRender navTitle="Conditional Rendering"/> */}
    {/* <ListRender navTitle="List Rendering (mapping)"/> */}
    {/* <Form navTitle="Form Component"/> */}
    {/* <UseState navTitle="useState hook"/> */}
    {/* <UseEffect navTitle="useEffect hook"/> */}
    {/* <UseEffectOnce navTitle="useEffect only Once"/> */}
    {/* <UseEffectOnce2 navTitle="useEffect only Once"/> */}
    {/* <UseEffectCounter navTitle="Automatic Counter"/> */}
    {/* <DataFetching navTitle="Data Fetching using axios"/> */}

    {/* <UserContext.Provider value={'kunal singh jaswal'}>
      <CourseContext.Provider value={'React'}>
        <CompA/>
      </CourseContext.Provider>
    </UserContext.Provider> */}

    {/* <CounterReducer/> */}
    {/* <CounterComplexReducer/> */}
    {/* <MultipleReducer/> */}

{/*
  components 
    A  B  C 
       D  E 
          F
 */}

 {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
<div className="showCount" style={{fontSize:"1.5vw",textAlign:"center"}}>Count - {count}</div>
  <ComponentA/>
  <ComponentB/>
  <ComponentC/>
 </CountContext.Provider> */}

 {/* <DataFetchingUseState/> */}
 <DatafetchingUseReducer/>


    </div>
  );
}

export default App;
