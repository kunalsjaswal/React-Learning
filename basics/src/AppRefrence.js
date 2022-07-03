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
import ParentMemo from './react hooks/Memo';
import UseRefHook from './react hooks/UseRefHook';
import UseRefTimer from './react hooks/UseRefTimer';
import DocTitle1 from './customHook/DocTitle1';
import DocTitle2 from './customHook/DocTitle2';
import Counter1 from './customHook/Counter1';
import Counter2 from './customHook/Counter2';
import UserForm from './customHook/UserForm';
import { Route,Routes } from 'react-router-dom';
import HomeRouter from './reactRouter/HomeRouter';
import AboutRouter from './reactRouter/AboutRouter';
import NavbarRouter from './reactRouter/NavbarRouter';
import OrderSummary from './reactRouter/OrderSummary';
import Nomatch from './reactRouter/Nomatch';
import Products from './reactRouter/Products';
import FeaturedProducts from './reactRouter/FeaturedProducts';
import NewProducts from './reactRouter/NewProducts';
import Users from './reactRouter/Users';
import UserDetails from './reactRouter/UserDetails';
import Admin from './reactRouter/Admin';

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
 {/* <DatafetchingUseReducer/> */}

{/* <ParentMemo/> */}
{/* <UseRefHook/> */}
{/* <UseRefTimer/> */}
{/* <DocTitle1/> */}
{/* <DocTitle2/> */}

{/* <Counter1/>
<Counter2/> */}

{/* <UserForm/> */}

{/* routing  */}
<NavbarRouter/>

<Routes>
  <Route path='/' element={<HomeRouter/>}></Route>
  <Route path='/about' element={<AboutRouter/>}></Route>
  <Route path='order-summary' element={<OrderSummary/>}></Route>
  <Route path='products' element={<Products/>}>
    {/* nested routes  */}
    {/* index = parent path i.e on products it will show featured */}
    <Route index element={<FeaturedProducts/>}/>
    <Route path='featured' element={<FeaturedProducts/>}/>
    <Route path='new' element={<NewProducts/>}/>
  </Route>
  <Route path='users' element={<Users/>} />

  {/* dynamic route  */}
  <Route path='users/:userId' element={<UserDetails/>}/>
  <Route path='users/admin' element={<Admin/>}/>

  <Route path='*' element={<Nomatch/>}></Route>
</Routes>


    </div>
  );
}

export default App;
