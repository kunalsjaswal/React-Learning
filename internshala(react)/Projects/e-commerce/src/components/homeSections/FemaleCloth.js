import React, { useState } from 'react'
import apiGet from '../../misc/apiConfig';
import { FemaleClothDiv } from '../../styled/MainStyles';
import arrow from "../../styled/images/arrow.png";
import arrowUp from "../../styled/images/arrowUp.png";
import gigi from "../../styled/images/gigi.png";
import Card from './Card';

const FemaleCloth = () => {

    const [femaleCloth,setFemaleClothes]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const resultFnx=async()=>{
        setIsLoading(true)
        const result=await apiGet("/products/category/women's clothing");
        setFemaleClothes(result);
        setIsLoading(false)
    }

    const resetFnx = () => {
        setFemaleClothes([]);
      };
    
  return (
    <FemaleClothDiv>
        <h1>Female's Clothing</h1>
      <div
        className="explore"
        onClick={femaleCloth.length > 0 ? resetFnx : resultFnx}
        style={{
          animationDuration: femaleCloth.length > 0 ? "0s" : "5s",
          top: femaleCloth.length > 0 ? "95%" : "40%",
        }}
      >
        <button id="ClickBtn">
          {femaleCloth.length > 0 ? "Explore Less" : "Explore More"}
        </button>
        <img src={femaleCloth.length > 0 ? arrowUp : arrow} alt="" />
      </div>

      {femaleCloth.length > 0 &&
        femaleCloth.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            description={value.description}
            price={value.price}
            image={value.image}
            rating={value.rating.rate}
          />
        ))}
      {femaleCloth.length > 0 && (
        <img
          src={gigi}
          alt="model"
          style={{
            width: "38%",
            height: "90%",
            position: "absolute",
            right: "2%",
            top: "3%",
          }}
        />
      )}
    </FemaleClothDiv>
  )
}

export default FemaleCloth