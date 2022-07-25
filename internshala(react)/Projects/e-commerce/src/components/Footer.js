import React from 'react'
import { FooterDiv } from '../styled/MainStyles'
import logo from '../styled/favicon2.png'

const Footer = () => {
  return (
    <FooterDiv>
        <aside className='left-aside'>
            <img src={logo} alt="logo" />
            <br />
            powered by KS Jaswal
        </aside>

    </FooterDiv>
  )
}

export default Footer