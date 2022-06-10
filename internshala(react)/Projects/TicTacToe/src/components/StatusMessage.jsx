import React from 'react'

const StatusMessage = ({winner,current}) => {
    
    // const winner=calculateWinner(current.state)

    // const message=winner?`${winner} is the Winner`:
    // `Next player is ${current.isNext?"0":"X"}`

    const noMovesLeft=current.board.every((el)=>el!==null)

  return (
    <h2 className='header-2'>
        {winner && `${winner} is the Winner`}
        {!winner && !noMovesLeft && `Next player is ${current.isNext?"0":"X"}` }
        {noMovesLeft && "No Winner"}
    </h2>
  )
}

export default StatusMessage