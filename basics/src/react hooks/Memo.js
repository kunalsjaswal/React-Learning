import React, { useState ,useMemo } from 'react'

const ParentMemo = () => {
    const [counter1,setCounter1] = useState(0)
    const [counter2,setCounter2] = useState(0)

    const incrementOne=()=>{
        setCounter1(counter1+1)
    }
    
    const incrementTwo=()=>{
        setCounter2(counter2+1)
    }

    


    const isEven=useMemo(()=>{
        let i=0
        while(i<900000000) i++
        return counter1%2==0
    },[counter1])


    console.log('render parent memo component')
  return (
    <div>
        <nav>Parent Memo component</nav>
        <button onClick={incrementOne}>Count One - {counter1}</button>  <span>{isEven?'Even':'Odd'}</span><br />
        <button onClick={incrementTwo}>Count Two - {counter2}</button>
      

    </div>
  )
}

export default ParentMemo