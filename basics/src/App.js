import './App.css';
import ConditionalRender from './components/ConditionalRender';
import Events from './components/Events';
import Form from './components/Form';
import ListRender from './components/ListRender';
import Parent from './components/Parent';
import Sample1 from './components/Sample1';
import UseEffect from './react hooks/UseEffect';
import UseEffectOnce from './react hooks/UseEffectOnce';
import UseEffectOnce2 from './react hooks/UseEffectOnce2';
import UseState from './react hooks/UseState';

function App() {
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
    
    <UseEffectOnce2 navTitle="useEffect only Once"/>

    </div>
  );
}

export default App;
