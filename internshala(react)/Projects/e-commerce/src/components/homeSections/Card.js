import React, { memo } from 'react'
import { MenCardDiv } from '../../styled/MainStyles'

const Card = ({title,description,price,image,rating}) => {
  
   
    return (
        <MenCardDiv>
        <img src={image} alt="men's clothes" />
        <div className='product-desc'>
            <h3>{title}  <span>{rating}</span></h3>
            <p>{description}</p>
            <div>
                <button>Buy Now</button>
                <span>$ {price}</span>  
            </div>
        </div>
    </MenCardDiv>
  )
}

export default memo(Card)