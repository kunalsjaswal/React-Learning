import React,{useState,useEffect} from 'react'
import useCustomHook1 from './hooks/useCustomHook1'

const DocTitle2 = () => {

    const [count, setCount] = useState(0)
    useCustomHook1(count)

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count -  {count}</button>
    </div>
  )
}

export default DocTitle2