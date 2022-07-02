import React from 'react'
import {NavLink} from 'react-router-dom'

const NavbarRouter = () => {
  return (
    <nav style={{backgroundColor:"white",textAlign: "left",paddingLeft:"1%"}}>
        <NavLink to='/' style={{color:"black",fontSize:"1.2vw"}}>Home</NavLink>
        <NavLink to='/about' style={{color:"black",marginLeft:"2%",fontSize:"1.2vw"}}>About</NavLink>
        <NavLink to='/products' style={{color:"black",marginLeft:"2%",fontSize:"1.2vw"}}>Products</NavLink>
    </nav>
  )
}

export default NavbarRouter