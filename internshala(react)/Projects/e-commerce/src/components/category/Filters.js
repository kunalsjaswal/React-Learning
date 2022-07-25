import React from 'react'
import { NavLink } from 'react-router-dom'

const Filters = () => {
  return (
    <div>
        <ul>
            <NavLink to="jewelery">Jewelery</NavLink>
            <NavLink to="menproducts">Men's Products</NavLink>
            <NavLink to="electronics">Electronics</NavLink>
            <NavLink to="womenproducts">Women's Products</NavLink>
        </ul>
    </div>
  )
}

export default Filters