import React, { useContext, useEffect, useState } from "react";
import { TotalCost } from "../../App";
import { CheckOutPriceCardDiv } from "../../styled/MainStyles";

const CheckOutPriceCard = ({ id, title, price, image }) => {
  
  const { costDispatch2,costState2 } = useContext(TotalCost);

  var money=costState2.filter(val=>{
    return val.id === id
  })

  const [changeState,setChangeState]=useState(false)
  const [items, setItems] = useState(money[0].items);
  const [demoItems, setDemoItems] = useState(items);
  

  const itemPrice=demoItems * price;
  const confirmItemPrice=items * price;

  useEffect(() => {
 
    if(demoItems===items){
      setChangeState(false)
    }else{
      setChangeState(true)
    }
  }, [demoItems,items]);



  const onConfirm=()=>{
    if(demoItems>items){

      costDispatch2({
        type:"before-increase",
        id:id
      })
      costDispatch2({
        type:"increase",
        id:id,
        price:itemPrice,
        items:demoItems,
      })
      


    }else{

        costDispatch2({
          type:"before-decrease",
          id:id
        })
        costDispatch2({
          type:"decrease",
          id:id,
          price:itemPrice,
          items:demoItems,
        })
    }

      setItems(demoItems)

  }

 

  return (
    <CheckOutPriceCardDiv style={{display:money[0].items===0 ? 'none':''}}>
      <img src={image} alt="product" />
      <div className="product-info">
        <h2  >{title}</h2>
        <span>
          items: {items} | Price: $ {confirmItemPrice}
        </span>
      </div>
      <div className="input-change">
        <button
          className="minus"
          disabled={demoItems === 0}
          style={{
            opacity: demoItems === 0 ? "0.6" : "1",
            cursor: demoItems === 0 ? "not-allowed" : "pointer",
          }}
          onClick={() => setDemoItems(demoItems - 1)}
        >
          -
        </button>
        <span className="items" >{demoItems}</span>
        <button className="plus" onClick={() => setDemoItems(demoItems + 1)}>
          +
        </button>

        {
          changeState &&
        <button className="confirm-items" onClick={onConfirm}>Confirm</button>
        }
      </div>
    </CheckOutPriceCardDiv>
  );
};

export default CheckOutPriceCard;
