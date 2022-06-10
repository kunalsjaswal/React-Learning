import React from "react";

const Square = (props) => {
  return <button className="btn" type="button" style={{animation: props.iswinningSquares?"winner 3s linear 0s infinite":"normal"}} onClick={props.onClick}>
      {props.value}
      </button>;
};

export default Square;
