import React from 'react'

const Child = ({greetParents}) => {
  return (
    <div>
        <button onClick={greetParents}>Greet</button>
    </div>
  )
}

export default Child