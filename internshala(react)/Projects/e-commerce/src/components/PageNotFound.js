import React from 'react'
import { PageNotFoundDiv } from '../styled/MainStyles'
import sadFace from '../styled/sadFace.png'

const PageNotFound = () => {
  return (
    <PageNotFoundDiv>
        <img src={sadFace} alt="" /><br />
         <span>Oops , Page not Found !</span> 
    </PageNotFoundDiv>
  )
}

export default PageNotFound