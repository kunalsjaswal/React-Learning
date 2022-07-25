import React, { useContext, useEffect, useState } from 'react'
import { TotalCost } from '../App'
import apiGet from '../misc/apiConfig';
import CheckOutPriceCard from './category/CheckOutPriceCard';
import IsLoading from './IsLoading';
import emptyCart from '../styled/images/emptyCart.png'

const Checkout = () => {

  const {costState2}=useContext(TotalCost);
  const [products,setProducts]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [costEqualsZero, setcostEqualsZero] = useState(false)
  
  var ids=[]
  var totalPrice=0;

  costState2.forEach(element => {
    ids.push(element.id)
    totalPrice+=element.cost

  });


  useEffect(()=>{
    setIsLoading(true);
    const promises=ids.map(value=> apiGet(`/products/${value}`));

    Promise.all(promises)
    .then((apiData)=>apiData.map(products=>({products})))
    .then((results)=>{
    setIsLoading(false);

      setProducts(results)
    })
    .catch(err=>{
    setIsLoading(false);
      console.log(err.message)
    })
  },[])


  return (
    <div style={{marginBottom:products.length===0?  "0%":"25%"}}>
        {isLoading && <IsLoading/>  }
        {totalPrice === 0 && !isLoading &&
          <img src={emptyCart} alt="empty cart" style={{width:"40%",marginLeft:'30%',
        }} />
        }
        {!isLoading  && products.map((value) => (
            <CheckOutPriceCard
              key={value.products.id}
              title={value.products.title}
              description={value.products.description}
              price={value.products.price}
              image={value.products.image}
              rating={value.products.rating.rate}
              id={value.products.id}
            />
          ))}
          {totalPrice !== 0 && 
          <div className="totalPrice" style={{background:"black",color:'gray',padding:"1%",width:"70%",borderTop:'3px solid gray',margin:'auto',
          marginTop:'2%', textAlign:'center'}}>
            <span style={{fontSize:"1.5vw",marginLeft:"-20%"}}>Thank You for comming to E-Kart</span>
            <span style={{fontSize:"1vw",marginLeft:"15%"}}>Your Total Cost - <b style={{color:"white"}}> $ {totalPrice}</b></span>
          </div>
          }
    </div>
  )
}

export default Checkout