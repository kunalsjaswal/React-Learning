import React, { useEffect, useState } from 'react'
import apiGet from '../../misc/apiConfig';
import IsLoading from '../IsLoading';
import BuyCard from './BuyCard';


const MensProducts = () => {

  const [MensCloth, setMensCloth] = useState([]);

  const [isLoading, setIsLoading] = useState(false)

  const resultFnx = async () => {
    setIsLoading(true);
    const result = await apiGet(`/products/category/men's clothing`);
    setIsLoading(false)
    setMensCloth(result);
  };

  useEffect(()=>{
    resultFnx();
  },[])
  return (
    <div>
      <h1>Men's Clothing</h1>
      {isLoading && <IsLoading/>}
      {!isLoading &&
        MensCloth.map((value) => (
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

export default MensProducts