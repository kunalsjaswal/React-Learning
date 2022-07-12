import React from 'react'
import { SidebarDiv } from '../styled/MainStyle'
import DashBoardToggle from './dashboard/DashBoardToggle'

const Sidebar = () => {
  return (
    <SidebarDiv>
        <DashBoardToggle/>
        bottom part
    </SidebarDiv>
  )
}

export default Sidebar