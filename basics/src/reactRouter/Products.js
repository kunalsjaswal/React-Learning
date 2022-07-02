import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <div>
        <input type="search" style={{margin:"2%",width:"20%",fontSize:"1vw"}} placeholder='Search products'/> <br />
        <Link to='featured' style={{color:"white",fontSize:"1vw",marginLeft:"2%"}}>Featured</Link>
        <Link to='new' style={{color:"white",fontSize:"1vw",marginLeft:"2%"}}>New</Link>
        <Outlet/>
{/* Outlet helps to render the child component corresponing to the link  */}
    </div>
  )
}

export default Products