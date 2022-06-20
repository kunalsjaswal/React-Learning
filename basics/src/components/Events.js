import React from 'react'

const Events = ({navTitle}) => {

    const onClickHandler=()=>{
        console.log("button clicked")
    }
  return (
    <div>
        <nav>{navTitle}</nav>
        <button onClick={onClickHandler}>Click</button>
    </div>
  )
}

export default Events