import React from 'react'
import notFoundImg from "../../images/imagenotfound.png";
import { ShowMoreDataStyled } from './showStyled';
import star from '../../images/star.png'


const ShowMainData = ({image,name,rating,summary,tags}) => {

    const summaryAsText = summary
    ? `${summary.split(" ").join(" ").replace(/<.+?>/g, "")}`
    : "No description";

  return (
    <ShowMoreDataStyled className='div-showmore'>
        <div className='content'>
            <h1>{name}</h1>

        </div>
        <img src={image?image.original:notFoundImg} alt="show img" />
        
        <div className="tags">
            {tags.map((tag,i)=>(
                <span key={i}>{tag}</span>
            ))}
            <p className='ratings' ><img src={star} alt="" /> {rating.average}</p>
            <p>{summaryAsText}</p>
        </div>

    </ShowMoreDataStyled>
  )
}

export default ShowMainData