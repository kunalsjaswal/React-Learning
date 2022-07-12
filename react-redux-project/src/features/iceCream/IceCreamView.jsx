import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { ordered,returned,restocked } from './iceCreamSlice'

const iceCreamView = () => {

  const numOfIceCreams=useSelector(state=>state.iceCream.numOfIceCreams)
  const iceCreamSold=useSelector(state=>state.iceCream.iceCreamSold)
  const dispatch=useDispatch()
  return (
    <div >
      <hr />
        <h1 style={{textDecoration:'underline',textShadow:"1px 1px 6px gray"}}>Welcome to IceCream Corner!</h1>
        <mark style={{fontSize:'0.8vw',padding:'0.3%'}}>We sold <span style={{fontWeight:'bold'}}>{iceCreamSold}</span> iceCreams today</mark>
        <h2>Number of IceCream left- <span style={{color:'white',background:'black',padding:'0.2% 0.5%',borderRadius:'5px'}}>{numOfIceCreams}</span></h2>
        <button onClick={()=> dispatch(ordered())}>Order IceCream</button>
        <button onClick={()=> dispatch(returned())}>Return IceCream</button>
        <button onClick={()=> dispatch(restocked(10))}>Restock IceCream</button>
    </div>
  )
}

export default iceCreamView