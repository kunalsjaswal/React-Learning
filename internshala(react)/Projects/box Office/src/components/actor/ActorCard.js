import React from "react";
import { MainDiv } from "./actorStyled";

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <MainDiv className="main-actor-div">
      
      <div className="actor-img">
        <img src={image} alt="actor img" />
      </div>

      <h1 className="actor-h1">  
        {name} {gender ? `(${gender})` : "(null)"}
      </h1>

      <p className="actor-country">  
        {country ? `from ${country}` : "no country known"}
      </p>

      <p className="actor-dob"> {birthday ? `Born on ${birthday}` : "null"} </p>
      <p className="actor-death">  
        {deathday ? `died on ${deathday}` : "Alive"}
      </p>

    </MainDiv>
  );
};

export default ActorCard;
