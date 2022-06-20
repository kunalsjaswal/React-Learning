import React from 'react'
import Child from './Child'

const Parent = ({parent}) => {
    
    // defining function in parent component and using in child component as a prop
    const greetParents=()=>{
        alert(`Namaste ${parent}!`)
    }

  return (
    <div>
        <Child greetParents={greetParents}/>
    </div>
  )
}

export default Parent