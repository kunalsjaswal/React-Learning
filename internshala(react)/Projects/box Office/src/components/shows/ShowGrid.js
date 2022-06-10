import React from "react";
import ShowCard from "./ShowCard";
import notFoundImg from "../../images/imagenotfound.png";
import {GridStyle} from "./showStyled";
import { useShows } from "../../misc/CustomHooks";

const ShowGrid = ({ data }) => {

  const [starredShows,dispatchStarred]=useShows();

  return (
    <GridStyle>
      {data.map(({ show }) => {
        
        const isStarred=starredShows.includes(show.id);
        const onStarClick=()=>{
          if(isStarred){
            dispatchStarred({type:"REMOVE",showId:show.id});
          }
          else{
            dispatchStarred({type:"ADD",showId:show.id});
          }
        }

        
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : notFoundImg}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        )
      })}
    </GridStyle>
  );
};

export default ShowGrid;
