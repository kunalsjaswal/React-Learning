import React, { useEffect, useState } from 'react'
import apiGet from '../../misc/apiConfig';
import IsLoading from '../IsLoading';
import BuyCard from './BuyCard';

const Electronics = () => {
  const [electronics,setElectronics]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const showElectronics=async()=>{
      setIsLoading(true)
      const result=await apiGet("/products/category/electronics")
      setElectronics(result);
      setIsLoading(false)

  }

  useEffect(()=>{

    showElectronics();
  },[])

  return (
    <div>
      <h1>Electronics & Gadgets</h1>
      {isLoading && <IsLoading/>}
      {!isLoading &&
        electronics.map((value) => (
          <BuyCard
            key={value.id}
            title={value.title}
            description={value.description}
            price={value.price}
            image={value.image}
            rating={value.rating.rate}
            id={value.id}
          />
        ))}
        
    </div>
  )
}

export default Electronics