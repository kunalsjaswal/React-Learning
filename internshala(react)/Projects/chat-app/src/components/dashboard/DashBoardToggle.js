import React from 'react'
import { useCallback } from 'react'
import { Button,Icon ,Drawer,Alert} from 'rsuite'
import Dashboard from '.'
import { useMediaQuery, useModalState } from '../../misc/customHooks'
import { auth } from '../../misc/firebase'

const DashBoardToggle = () => {
const {isOpen ,close,open}=useModalState()
const isMobile=useMediaQuery('(max-width: 992px)')

const onSignOut= useCallback(()=>{
  auth.signOut();
  Alert.info('Signed out',4000)
  close();
},[close])

  return (
    <div>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard"/>Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement='left'>
        <Dashboard onSignOut={onSignOut}/>
      </Drawer>
    </div>
  )
}

export default DashBoardToggle