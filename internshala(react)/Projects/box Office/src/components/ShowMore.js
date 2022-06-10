import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import apiGet from "./ApiConfig";
import Cast from "./shows/Cast";
import Details from "./shows/Details";
import Seasons from "./shows/Seasons";
import ShowMainData from "./shows/ShowMainData";


// reducer function 
const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }
    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};

// intitials state in reducer 
const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const ShowMore = () => {
  const { id } = useParams();

  // const [show, setshow] = useState(null);
  // const [isLoading, setisLoading] = useState(true);
  // const [error, seterror] = useState(null);

  // using reducer
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          dispatch({ type: "FETCH_SUCCESS", show: results });
        }, 2000);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED", error: err.message });
      });
  }, [id]);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error Occured:{error}</div>;
  }
 
  document.body.style.backgroundColor = "rgb(29, 29, 29)";

  return (

    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <div>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>

      <div>
        <Seasons seasons={show._embedded.seasons}/>
      </div>

      <div>
        <Cast cast={show._embedded.cast}/>
      </div>
    </div>
  );
};

export default ShowMore;
