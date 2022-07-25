import React, { useContext } from 'react'
import {NavLink,Link, useLocation} from 'react-router-dom'
import { RoutesDiv } from '../styled/MainStyles'
import Favicon2 from '../styled/favicon2.png'
import { TotalCost } from '../App'


const PublicRotes = () => {

  const costContext=useContext(TotalCost); 

  const location=useLocation();

  const isCategory=location.pathname === '/category' || location.pathname === '/category/womenproducts' || location.pathname === '/category/jewelery' || location.pathname === '/category/menproducts' ||
  location.pathname === '/category/electronics';

  var totalItems=0;
  var totalCost=0;
  costContext.costState2.map(val=>totalItems+=val.items)
  costContext.costState2.map(val=>totalCost+=val.cost)


  return (
    <RoutesDiv>
      <span className="NavLinks">
        <NavLink className="NavLink" to="/">Home</NavLink>
        <NavLink className="NavLink2"  to="/category">Category</NavLink>
        <NavLink className="NavLink3" to='/checkout'>Checkout</NavLink>
      </span>

        <Link to="/"><img src={Favicon2} alt="" /><b>E - Kart</b></Link>      
        <span className='items-cost'
        style={{position: isCategory? 'fixed':'relative',visibility:isCategory?'visible':'hidden' }}
        >{totalItems} / {totalCost}$</span>
    </RoutesDiv>
  )
}

export default PublicRotes