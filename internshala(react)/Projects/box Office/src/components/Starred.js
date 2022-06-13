import React, { useState, useEffect } from "react";
import { useShows } from "../misc/CustomHooks";
import apiGet from "./ApiConfig";
import MainPageLayout from "./MainPageLayout";
import ShowGrid from "./shows/ShowGrid";

const Starred = () => {
  const [starred] = useShows();

  const [shows, setshows] = useState(null);
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setshows(results);
          setisLoading(false);
        })
        .catch((err) => {
          seterror(err.message);
          setisLoading(false);
        });
    } else {
      setisLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>Still Loading</div>}
      {error && <div>Error Occured: {error}</div>}
      {!isLoading && !shows && <div>No shows were added</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows}></ShowGrid>}
    </MainPageLayout>
  );
};

export default Starred;
