import './App.css';
import Events from './components/Events';
import Parent from './components/Parent';
import Sample1 from './components/Sample1';

function App() {
  return (
    <div className="App">
    
    {/* <Sample1  navTitle="useState Demonstration"/> */}
    {/* <Events navTitle="Events handling"/> */}

    <Parent parent="mummy papa"/>
    </div>
  );
}

export default App;
