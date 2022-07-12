import React from 'react'
import { SidebarDiv } from '../styled/MainStyle'
import CreateRoombtnModal from './CreateRoombtnModal'
import DashBoardToggle from './dashboard/DashBoardToggle'

const Sidebar = () => {
  return (
    <SidebarDiv className='m-1'>
        <DashBoardToggle/>
        <CreateRoombtnModal/>
    </SidebarDiv>
  )
}

export default Sidebar