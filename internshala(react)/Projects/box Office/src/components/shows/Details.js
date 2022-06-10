import React from 'react';
import { DetailDiv } from './showStyled';

const Details = ({status,network,premiered}) => {
  return (
    <DetailDiv>
      <h2>Details</h2>
      <div className="status">
        Status: <span>{status}</span>
      </div>

      <div className="others">
        Premiered {premiered} {network?`on ${network.name}`:null}
      </div>
    </DetailDiv>
  )
}

export default Details