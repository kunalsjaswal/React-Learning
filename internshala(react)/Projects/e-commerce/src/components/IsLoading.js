import React from 'react'
import LoadingGif from '../styled/images/Loading_icon.gif'
import { IsLoadinDiv } from '../styled/MainStyles'

const IsLoading = () => {
  return (
    <IsLoadinDiv>
        <img src={LoadingGif} alt="" />
    </IsLoadinDiv>
  )
}

export default IsLoading