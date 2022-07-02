import React,{useEffect,useRef} from 'react'

const UseRefHook = () => {

    const inputRef=useRef(null)

    useEffect(()=>{
    //focusing input element
    inputRef.current.focus()
},[])

  return (
    <div>
        <nav>useRef Hook</nav>
        <input placeholder='username' ref={inputRef} type="text" style={{marginLeft:"40%",width:"20%",fontSize:"1.2vw",marginTop:"2%"}}/>
        <input placeholder='Password' type="password" style={{marginLeft:"40%",width:"20%",fontSize:"1.2vw",marginTop:"2%"}}/>
    </div>
  )
}

export default UseRefHook