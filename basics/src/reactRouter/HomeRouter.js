import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeRouter = () => {

  const navigate=useNavigate()

  return (
    <div>
        <h1>HomePage</h1>
        <button onClick={()=>navigate('order-summary',{replace:true})}>Place Order</button>

        {/* replace:true doesn't allow top go back  */}
    </div>
  )
}

export default HomeRouter