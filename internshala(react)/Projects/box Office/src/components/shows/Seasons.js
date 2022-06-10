import React from "react";
import { SeasonsDiv } from "./showStyled";

const Seasons = ({ seasons }) => {
  return (
    <SeasonsDiv>
      <h2>Seasons</h2>

      <p className="total-season">
        Seasons in total: <span>{seasons.length}</span>
      </p>
      <p className="total-episode">
        Episodes in total:
        <span>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>

      <div className="season-map">
        {seasons.map((season) => (
          <div key={season.id} className="season-content">
            <div>
              <h3 className="season-no">Season {season.number}</h3>
              <div className="episode-order">
                Episodes: <span>{season.episodeOrder}</span>
              </div>

              <div className="aired">
                Aired:
                <span>
                  {season.premierDate} - {season.endDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SeasonsDiv>
  );
};

export default Seasons;
