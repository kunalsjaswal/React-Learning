import React,{useState,useEffect} from 'react'

const UseEffectOnce = ({navTitle}) => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition=e=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)

        // the return from function is cleanup function 
        return ()=>{
            console.log("cleanup function")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

  return (
    <div>
        <div style={{textAlign:"center",fontSize:"1.5vw",marginTop:"2%"}}>
            <pre>X:{x}  Y:{y}</pre>
        </div>
    </div>
  )
}

export default UseEffectOnce