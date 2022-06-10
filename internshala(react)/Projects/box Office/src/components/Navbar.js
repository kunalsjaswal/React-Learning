import React from 'react'
import { Link ,useLocation} from 'react-router-dom';
import { NavbarStyle } from './MainStyled';

const Navbar = () => {

  let location=useLocation();

  return (
    <NavbarStyle locpath={location.pathname}>
    <div className="Title">
      <h1>BOX OFFICE</h1>
      <p>Are you looking for a movie or an actor?</p>
    </div>
      <ul>
          <li >
            <Link  className='home-nav' to='/'>Home</Link>
          </li>
          <li >
            <Link  className='starred-nav' to='/starred'>Starred</Link>
          </li>
      </ul>
      </NavbarStyle>
  )
}

export default Navbar