import React from 'react'

const History = ({history,gotoMove,currentMove}) => {
  return (
    <ul>
      <h3>History</h3>
      {
        history.map((item,i)=>{
          return (
          <li key={i}>
          <button type='button' 
          style={{
            color:i===currentMove?"white":"black",
          }}
          onClick={()=>{
            gotoMove(i)

          }} className='btn-hist'>
            {i===0?"Start the game":`go to move #${i} `}
            </button>
          </li>)
        })
      }
            
       
    </ul>
  )
}

export default History