import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
const navigate=useNavigate()

  return (
    <div style={{color:'white'}}>
        Order Confirmed!!
        <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}

export default OrderSummary