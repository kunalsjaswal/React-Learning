import styled from "styled-components";
import FadeIn from 'react-fade-in';



// showgrid.js style 
export const GridStyle = styled(FadeIn) `
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-content: center;
  grid-gap:3%;
  margin-top:5%;
  margin-bottom:10%;
`;
// showCard.js 
export const MainDiv = styled.div `
border-bottom:3px solid blue;
border-radius:15px;

.show-img-div{
  max-height:28vw;
  overflow:hidden;
  img{
  width:100%;
  height:28vw;
  border-radius:10%;
  transition:0.8s;
  }
  img:hover{
      width:106%;
      height:30vw;
      margin-left:-3%;
      margin-top:-3%;
  }
}
.show-h1{
  font-size:1.2vw;
  margin-bottom:5%;
}
.show-summary{
  font-size:0.9vw;
  color:rgb(31, 30, 30);
}

.show-link{
  margin-left:5%;
  color:black;
}


.show-btn:hover{
  color:black;
  background:white;
}
`;

export const ShowBtn=styled.button`
  border:2px solid black;
  border-radius:40px;
  margin-left:45%;
  font-size:0.8vw;
  padding:1% 3%;
  cursor:pointer;
  background:${props=>{return props.isStarred?"green":"white"}};
  color:${props=>{return props.isStarred?"white":"black"}};
  transition:0.6s;
  margin-bottom:2%;
`;

// showmoredata.js style 
export const ShowMoreDataStyled=styled.div`
padding:2%;
background:rgb(29, 29, 29);
color:white;
.content{
  h1{
    font-size:3vw;
    text-align:center;
  }
}
img{
  width:30%;
  margin-left:35%;
}
.tags{
  width:60%;
  margin-left:20%;
  margin-top:2%;
  span{
    border:2px solid white;
    border-radius:30px;
    padding:0.5% 1.5%;
    font-size:1vw;
    margin-right:1%;
    transition:0.5s;
  }
  span:hover{
    cursor:pointer;
    background:gray;
  }
  p{
    text-align: justify;
    font-size:0.9vw;

  }
  .ratings{
    margin-top:-2%;
    margin-left:80%;
    font-size:1.2vw;
    color:gold;
    font-weight:bold;
    img{
      width:10%;
    }
  }

}
`;

// Details.js style 

export const DetailDiv=styled.div`
background:rgb(29, 29, 29);
color:white;
margin-top:-2%;
padding:2%;
h2{
  font-size:2vw;
  margin-left:20%;
}
.status{
  font-size:1vw;
  margin-left:20%;
  span{
    color:yellow;
  }
}
.others{
  margin-left:20%;
  font-size:1vw;
}
`;


// Seasons.js style 

export const SeasonsDiv=styled.div`
background:rgb(29, 29, 29);
color:white;
padding:2%;
h2{
  font-size:2vw;
  margin-left:20%;
}
.total-season , .total-episode{
  margin-left:20%;
  font-size:1vw;
  span{
    color:yellow;
  }
}
.season-map{
  display:grid;
  grid-template-columns: 20% 20% 20%;
  justify-content: center;
  grid-gap:2%;

  .season-content{
    border:1px solid white;
    padding:0% 1% 10% 5%;
    border-radius:10px;
    transition:0.4s;
    cursor:pointer;
    h3{
      font-size:1.2vw;
    }

    .episode-order,.aired{
      font-size:0.8vw;
      margin-bottom:1%;
      span{
        color:rgb(25, 201, 54);
        font-weight:bold;
      }
    }
  }

  .season-content:hover{
    background:gray;
  }

}

`;


// Cast.js style 
export const CastDiv=styled.div`
background:rgb(29, 29, 29);
color:white;
padding:2%;
margin-bottom:20%;
h2{
  font-size:2vw;
  margin-left:20%;
}

.main{
  
  width:15%;
  margin-left:1.3%;
  float:left;
  img{
    width:70%;
    border-radius:20px;
    margin-left:15%;
  } 
  div{
    text-align:center;
    font-size:1vw;
    margin-top:3%;
  }
}
`;