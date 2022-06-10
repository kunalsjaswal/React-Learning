import React  from "react";
import Square from "./Square";
import cross from "../images/cross.png";

const Board = ({board,handleClick,winningSquares}) => {
  

  const renderSquare = (position) => {
    const iswinningSquares=winningSquares.includes(position)

    return (
      <Square
        iswinningSquares={iswinningSquares}
        value={board[position]}
        onClick={() => {
          handleClick(position);
        }}
      />
    );
  };


  return (
    <>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
};

export default Board;
