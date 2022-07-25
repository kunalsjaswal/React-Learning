import React, { useState } from 'react'
import apiGet from '../../misc/apiConfig';
import arrow from "../../styled/images/arrow.png";
import arrowUp from "../../styled/images/arrowUp.png";
import { JeweleryDiv } from '../../styled/MainStyles';
import Card from './Card';
import jewelryPic from '../../styled/images/jewelry.png'

const Jewelery = () => {

    const [Jewelery,setJewelery]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const resultFnx=async()=>{
        setIsLoading(true)
        const result=await apiGet("/products/category/jewelery");
        setJewelery(result);
        setIsLoading(false)
    }
    const resetFnx = () => {
        setJewelery([]);
      };


  return (
    <JeweleryDiv>
        <h1>Jewelery</h1>
        <div
        className="explore"
        onClick={Jewelery.length > 0 ? resetFnx : resultFnx}
        style={{
          animationDuration: Jewelery.length > 0 ? "0s" : "5s",
          top: Jewelery.length > 0 ? "95%" : "40%",
        }}
      >
        <button id="ClickBtn">
          {Jewelery.length > 0 ? "Explore Less" : "Explore More"}
        </button>
        <img src={Jewelery.length > 0 ? arrowUp : arrow} alt="" />
      </div>

      {Jewelery.length > 0 &&
        Jewelery.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            description={value.description}
            price={value.price}
            image={value.image}
            rating={value.rating.rate}
          />
        ))}
      {Jewelery.length > 0 && (
        <img
          src={jewelryPic}
          alt="model"
          style={{
            width: "30%",
            height: "90%",
            position: "absolute",
            right: "10%",
            top: "3%",
          }}
        />
      )}
    </JeweleryDiv>
  )
}

export default Jewelery