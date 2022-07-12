import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { ordered,returned,restocked } from './cakeSlice'

const cakeView = () => {
   const numOfCakes=useSelector(state=>state.cake.numOfCakes)
   const cakeSold=useSelector(state=>state.cake.cakeSold)
   const dispatch=useDispatch()
  return (
    <div>
        <h1 style={{textDecoration:'underline',textShadow:"1px 1px 6px gray"}}>Welcome to Cake Corner!(get an IceCream Free)</h1>
        <mark style={{fontSize:'0.8vw',padding:'0.3%'}}>We sold <span style={{fontWeight:'bold'}}>{cakeSold}</span> Cake today</mark>
        <h2>Number of Cakes left- <span style={{color:'white',background:'black',padding:'0.2% 0.5%',borderRadius:'5px'}}>{numOfCakes}</span></h2>
        <button onClick={()=> dispatch(ordered())}>Order Cake</button>
        <button onClick={()=> dispatch(returned())}>Return Cake</button>
        <button onClick={()=> dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}

export default cakeView