import React, { memo, useContext, useEffect, useState } from "react";
import { TotalCost } from "../../App";
import { BuyCardDiv } from "../../styled/MainStyles";
import { useCost } from "../../misc/CustomHooks";

const BuyCard = ({ id, title, description, price, image, rating }) => {
  const costContext = useContext(TotalCost);

  var priceRound = price;
  priceRound = priceRound.toFixed(2);

  var filtered=costContext.costState2.filter(val=>{
    return val.id === id && val.items>0
  })
  const isIncluded=filtered.length>0;




  const onBuy = () => {
    costContext.costDispatch2({
      type:'remove-from-initials',
      id:id,
  })
    costContext.costDispatch2({
        type:'add-into-initials',
        id:id,
        price:price,
        items:1
    })
  };


  const onRemove=()=>{
    costContext.costDispatch2({
      type:'remove-from-initials',
      id:id,
  })
  }

  return (
    <BuyCardDiv>
      <img src={image} alt="men's clothes" />
      <div className="product-desc">
        <h3>
          {title} <span>{rating}</span>
        </h3>
        <p>{description}</p>
        <div style={{ width: "40%" }}>
          <button
            disabled={isIncluded}
            style={{
              opacity: isIncluded ? "0.6" : "1",
              cursor: isIncluded ? "not-allowed" : "pointer",
            }}
            onClick={onBuy}
          >
            Buy Now
          </button>
          <button
            disabled={!isIncluded} onClick={onRemove}
            style={{ background: "red", border: "2px solid red" ,opacity: !isIncluded ? "0.6" : "1",
            cursor: !isIncluded ? "not-allowed" : "pointer",}}
          >
            Remove
          </button>

          <span>$ {priceRound}</span>
        </div>
      </div>
    </BuyCardDiv>
  );
};

export default memo(BuyCard);
