import React from "react";
import ActorCard from "./ActorCard";
import actorImg from "../../images/actorImage.jpg";
import { ShowGrid } from "./actorStyled";

const ActorGrid = ({ data }) => {
  return (
    <ShowGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : "Null"}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : actorImg}
        />
      ))}
    </ShowGrid>
  );
};

export default ActorGrid;
