import React, { useEffect, useState } from "react";
import { MensClothDiv } from "../../styled/MainStyles";
import apiGet from "../../misc/apiConfig";
import MensCard from "./Card";
import arrow from "../../styled/images/arrow.png";
import arrowUp from "../../styled/images/arrowUp.png";

import zayn from "../../styled/images/zayn2.png";

const MensCloth = () => {
  const [MensCloth, setMensCloth] = useState([]);

  const [isLoading, setIsLoading] = useState(false)

  const resultFnx = async () => {
    setIsLoading(true);
    const result = await apiGet(`/products/category/men's clothing`);
    setIsLoading(false)
    setMensCloth(result);
  };

  const resetFnx = () => {
    setMensCloth([]);
  };

  return (
    <MensClothDiv>
      <h1>Men's Clothing</h1>
      <div
        className="explore"
        onClick={MensCloth.length > 0 ? resetFnx : resultFnx}
        style={{
          animationDuration: MensCloth.length > 0 ? "0s" : "5s",
          top: MensCloth.length > 0 ? "90%" : "40%",
        }}
      >
        <button id="ClickBtn">
          {MensCloth.length > 0 ? "Explore Less" : "Explore More"}
        </button>
        <img src={MensCloth.length > 0 ? arrowUp : arrow} alt="" />
      </div>

      {MensCloth.length > 0 &&
        MensCloth.map((value) => (
          <MensCard
            key={value.id}
            title={value.title}
            description={value.description}
            price={value.price}
            image={value.image}
            rating={value.rating.rate}
          />
        ))}
      {MensCloth.length > 0 && (
        <img
          src={zayn}
          alt="model"
          style={{
            width: "25%",
            height: "90%",
            position: "absolute",
            right: "10%",
            top: "5%",
          }}
        />
      )}
    </MensClothDiv>
  );
};

export default MensCloth;
