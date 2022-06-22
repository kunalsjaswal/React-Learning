import React,{useState} from 'react'

const UseState = ({navTitle}) => {

  // setting new state 
  const [counter, setCounter]= useState(0)

  const handleCounter=()=>{
    setCounter(counter+1)
  }

  //setting new state from previous state
  const intialCount=0
  const [counter2,setCounter2]=useState(intialCount)

  // using objects in useState hooks
  const [name, setName] = useState({fname:'',lname:''})

  // using array as useState variable
  const [items, setItems] = useState([])

  const itemsHandle=()=>{
    setItems([...items,{
      id:items.length,
      value:Math.floor(Math.random()*10)+1
    }])

    // console.log(JSON.stringify(items))
  }

  // use this handle only if you have same name in html inputs and objects 
  // else use this - setName({...name,firstName:e.target.value})
  const handleInputChange=e=>{
    setName({...name,[e.target.name]:e.target.value})
  }
  const handleInputChange2=e=>{
    setName({...name,[e.target.name]:e.target.value})
  }



  return (
    <div>
      <nav>{navTitle}</nav>
      {/* counter1  */}
      <button onClick={handleCounter}>Count {counter}</button>

      {/* counter2  */}
      <div className='counter'>
        Count Value: {counter2} <br />
        <button onClick={() => setCounter2(intialCount)}>Reset</button>
        <button onClick={() => setCounter2(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCounter2(prev => prev - 1)}>Decrement</button>
      </div>

      {/* objects as State variable  */}
      <form>
        <input type="text" name="fname" value={name.fname} onChange={handleInputChange} placeholder='First Name' />
        <input type="text" name='lname' value={name.lname} onChange={handleInputChange} style={{marginLeft:'5%'}} placeholder='Last Name' /> 
        <h3>Hello {name.fname} {name.lname}. Hope you are Learning React!</h3>
      </form>

      {/* array as state variable  */}

      <div className='item-array'>
          {/* <input type="text" name='itemName' value={items.itemName} onChange={itemsHandle} placeholder='enter items..'/> */}
          <button onClick={itemsHandle}>Generate Random</button>

        <h2>Random Numbers</h2>
        <ul style={{color:"black",listStyleType:'none'}}>
          {
            items.map(item=>
            <li key={item.id}>{item.value}</li>)
            }
        </ul>
      </div>
      
    </div>
  )
}

export default UseState