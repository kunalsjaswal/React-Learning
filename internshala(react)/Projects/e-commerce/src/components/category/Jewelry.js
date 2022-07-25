import React, { useEffect, useState } from "react";
import apiGet from "../../misc/apiConfig";
import IsLoading from "../IsLoading";
import BuyCard from "./BuyCard";

const Jewelry = () => {
  const [Jewelery, setJewelery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const resultFnx = async () => {
    setIsLoading(true);
    const result = await apiGet("/products/category/jewelery");
    setJewelery(result);
    setIsLoading(false);
  };

  useEffect(() => {
    resultFnx();
  }, []);

  return (
    <div>
      <h1>Jewelery</h1>
      {isLoading && <IsLoading/>}
      {!isLoading &&
        Jewelery.map((value) => (
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
  );
};

export default Jewelry;
