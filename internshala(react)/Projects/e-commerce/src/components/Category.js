import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import { CategoryDiv } from '../styled/MainStyles'
import Filters from './category/Filters'

const Category = () => {
  return (
    <CategoryDiv>
        <div className="filters">
          <Filters/>
        </div>
        <div className="outlet">
          <Outlet/>
        </div>
    </CategoryDiv>
  )
}

export default Category