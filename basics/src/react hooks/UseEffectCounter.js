import React,{useState,useEffect} from 'react'

const UseEffectCounter = ({navTitle}) => {

    const [count, setCount] = useState(0)

    const tick=()=>{
        setCount(count+1)
    }

    useEffect(() => {
      const interval=setInterval(tick,1000)
    
      return () => {
        clearInterval(interval)
      }
    },[count])
    
  return (
    <div>
        <nav>{navTitle}</nav>
        <div className='autoCount'>{count}</div>
    </div>
  )
}

export default UseEffectCounter