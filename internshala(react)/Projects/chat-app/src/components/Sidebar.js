import React ,{ useEffect, useRef, useState } from 'react'
import {Divider} from 'rsuite'
import { SidebarDiv } from '../styled/MainStyle'
import CreateRoombtnModal from './CreateRoombtnModal'
import DashBoardToggle from './dashboard/DashBoardToggle'
import ChatRoomList from './rooms/ChatRoomList'
const Sidebar = () => {
  const topSidebarRef=useRef()
  const [height, setHeight] = useState(0)

  
  useEffect(()=>{
    if(topSidebarRef.current){
      setHeight(topSidebarRef.current.scrollHeight)
    }
  },[topSidebarRef])

  return (
    <div className='h-100 pt-2'>
    <div ref={topSidebarRef} >
        <DashBoardToggle/>
        <CreateRoombtnModal/>
        <Divider>Join Conversation</Divider>
        <ChatRoomList aboveElHeight={height}/>
    </div>
    </div>
  )
}

export default Sidebar