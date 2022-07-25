import React, { memo, useEffect, useState } from 'react'
import apiGet from '../../misc/apiConfig'
import IsLoading from '../IsLoading';
import BuyCard from './BuyCard';

const StartingMessage = () => {

  const [products,setProducts]=useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const resultFnx=async()=>{
    setIsLoading(true);
    const result= await apiGet('/products');
    setIsLoading(false);
    setProducts(result);
  }
  useEffect(()=>{
    resultFnx();
  },[])

  return (
    <div>
      {isLoading && <IsLoading/>}
       {!isLoading &&
        products.map((value) => (
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

export default memo(StartingMessage)