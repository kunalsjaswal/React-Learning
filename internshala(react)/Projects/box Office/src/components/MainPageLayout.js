import React,{memo} from 'react'
import Navbar from './Navbar'

const MainPageLayout = ({children}) => {
  console.log("mainpage")
  return (
    <>
    <Navbar/> 
    {children}
    </>
  )
}

export default memo(MainPageLayout)