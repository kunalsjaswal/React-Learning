import React,{memo, useEffect, useState} from 'react'
import apiGet from '../../misc/apiConfig';
import IsLoading from '../IsLoading';
import BuyCard from './BuyCard';


const FemaleProducts = () => {

  const [femaleCloth,setFemaleClothes]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const resultFnx=async()=>{
        setIsLoading(true)
        const result=await apiGet("/products/category/women's clothing");
        setFemaleClothes(result);
        setIsLoading(false)
    }

    useEffect(()=>{
      resultFnx()
    },[])

  return (
    <div>
       <h1>Female's Clothing</h1>
      {isLoading && <IsLoading/>}
      {!isLoading &&
        femaleCloth.map((value) => (
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

export default memo(FemaleProducts)