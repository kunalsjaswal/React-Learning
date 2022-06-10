import React ,{ useState } from "react";
import Board from "./components/Board";
import '../src/style/root.css'
import { calculateWinner } from "./helpers";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";

const new_Game=[{board:Array(9).fill(null),isNext:false} ]



const App = () => {



  const [history, sethistory] = useState(new_Game);
  const [currentMove,setCurrentMove]=useState(0);
  const current=history[currentMove];


    // winner 
    const {winner,winningSquares}=calculateWinner(current.board);

  const handleClick = (position) => {

    // to handle double change while clicking same box
    if(current.board[position] || winner){
        return;
    }

    
        // prev -> previous board==Null 
    sethistory((prev) => {

      const last=prev[prev.length-1];
      const newBoard=last.board.map((square, pos) => {
        if (pos === position) {
          return last.isNext?"O":"X";
        }
        return square;
      });

      return prev.concat({board:newBoard,isNext:!last.isNext})
    });

    setCurrentMove(prev=>prev+1)

  };

  const gotoMove=(move)=>{
    setCurrentMove(move)

  }

  const tonewGame=()=>{
    sethistory(new_Game)
    setCurrentMove(0)
  }
 
 
 


  return (
    <>
      <div>
        <h1 className="header-1" style={{color:"yellow"}}>TIC <span style={{color:"blue"}}> TAC</span> TOE</h1>
        <StatusMessage winner={winner} current={current}/>
        <Board board={current.board} handleClick={handleClick} winningSquares={winningSquares}/>
        <button type="button" className="start-btn" onClick={tonewGame}>Start a new Game</button>
        <History history={history} gotoMove={gotoMove} currentMove={currentMove}/>
      </div>
    </>
  );


};
export default App;
