import React, { useState } from 'react'
import apiGet from '../../misc/apiConfig';
import { ElectronicsDiv } from '../../styled/MainStyles';
import Card from './Card';
import arrow from "../../styled/images/arrow.png";
import arrowUp from "../../styled/images/arrowUp.png";
import elec from "../../styled/images/electronics.png";

const Electronics = () => {

    const [electronics,setElectronics]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    const showElectronics=async()=>{
        setIsLoading(true)
        const result=await apiGet("/products/category/electronics")
        setElectronics(result);
        setIsLoading(false)

    }

    const resetFnx = () => {
        setElectronics([]);
      };


  return (
    <ElectronicsDiv>
        <h1>Electronics & Gadgets</h1>
      <div
        className="explore"
        onClick={electronics.length > 0 ? resetFnx : showElectronics}
        style={{
          animationDuration: electronics.length > 0 ? "0s" : "5s",
          top: electronics.length > 0 ? "95%" : "40%",
        }}
      >
        <button id="ClickBtn">
          {electronics.length > 0 ? "Explore Less" : "Explore More"}
        </button>
        <img src={electronics.length > 0 ? arrowUp : arrow} alt="" />
      </div>

      {electronics.length > 0 &&
        electronics.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            description={value.description}
            price={value.price}
            image={value.image}
            rating={value.rating.rate}
          />
        ))}
      {electronics.length > 0 && (
        <img
          src={elec}
          alt="model"
          style={{
            width: "40%",
            height: "90%",
            position: "absolute",
            right: "5%",
            top: "5%",
          }}
        />
      )}

    </ElectronicsDiv>
  )
}

export default Electronics