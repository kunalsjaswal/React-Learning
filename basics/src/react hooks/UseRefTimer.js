import React, { useEffect, useState ,useRef} from 'react'

const UseRefTimer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef=useRef()
    useEffect(()=>{

        intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }

    },[])
  return (
    <>
    <div style={{fontSize:"1.2vw",marginLeft:"45%",backgroundColor:"blue",position:"absolute",padding:"0.5% 1%"}}>
        Hook Timer : {timer}
    </div>
    <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
    </>
  )
}

export default UseRefTimer