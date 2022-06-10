import React from "react";
import { CastDiv } from "./showStyled";
import actorImg from "../../images/actorImage.jpg";
import './smallstyle.css'



const Cast = ({ cast }) => {
  return (
    <CastDiv>
      <h2>Cast</h2>
      {cast.map(({ person, character }, key) => (
        <p className="main">
          <img src={person.image ? person.image.medium : actorImg} alt="" />
          <div>
          {person.name} as  <br />{character.name}
          </div>
        
        </p>
        

      ))}
    </CastDiv>
  );
};

export default Cast;
