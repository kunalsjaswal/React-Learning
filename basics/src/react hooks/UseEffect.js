import React,{useState,useEffect} from 'react'

const UseEffect = ({navTitle}) => {

    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')

    // in useEffect 1st parameter is function which is executed after every render of the component 
    // 2nd parameter is an array:- only those props/state in the array is watched. then only useEffect function will execute
    // if we make array empty then the useEffect function will execute only once
    // if we won't use 2nd parameter then if any props/state inside the component changes the useEffect function is executed 
   
    useEffect(()=>{
        console.log("useEffect- render")
        document.title=`You cliked ${counter} times`
    },[counter])


  return (  
    <div>
        <nav>{navTitle}</nav>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} style={{marginLeft:"35%",padding:"0.5%",fontSize:"1vw"}} />
        <button onClick={prev=>setCounter(prev=>prev+1)} style={{marginLeft:"0%"}}>Clicked {counter} times</button>
    </div>
  )
}

export default UseEffect