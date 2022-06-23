import React,{useState} from 'react'
import UseEffectOnce from './UseEffectOnce'

const UseEffectOnce2 = ({navTitle}) => {

    const [display, setDisplay] = useState(true)
    
  return (
    <div>
        <nav>{navTitle}</nav>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <UseEffectOnce navTitle="useEffect only Once"/>}
    </div>
  )
}

export default UseEffectOnce2