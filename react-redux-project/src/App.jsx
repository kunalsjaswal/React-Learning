import './App.css'
import UsersView from './features/users/UsersView'
import IceCreamView from './features/iceCream/IceCreamView'
import CakeView from './features/cake/CakeView'

function App() {

  return (
    <div className="App">
      <CakeView/>
      <IceCreamView/>
      <UsersView/>
    </div>
  )
}

export default App
