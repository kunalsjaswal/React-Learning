import React from "react";
import { Link } from "react-router-dom";
import { MainDiv ,ShowBtn} from "./showStyled";

const ShowCard = ({ id, name, image, summary ,onStarClick,isStarred}) => {
  // .split will convert text into array after ' '.
  // .slice will take 10 elements from array.
  // .join will make array into string by adding ' '
  // .replace will replace all html tags with ''
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <MainDiv className="show-main-div">

      <div className="show-img-div">
        <img src={image} alt="show image" />
      </div>

      <h1 className="show-h1"> {name} </h1>
      <p className="show-summary"> {summaryAsText} </p>

      <div>
        <Link className="show-link" to={`/show/${id}`}> Read more </Link>
        <ShowBtn className="show-btn" type="button" onClick={onStarClick} isStarred={isStarred}> {isStarred?"Remove":"Add me"} </ShowBtn>
      </div>
    </MainDiv>

  );
};

export default ShowCard;
