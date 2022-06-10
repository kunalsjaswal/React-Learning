import styled from "styled-components";

export const ShowGrid = styled.div `
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-content: center;
  grid-gap:3%;
  margin-top:5%;
  margin-bottom:10%;
`;

export const MainDiv = styled.div `
border-bottom:3px solid red;
border-radius:15px;
.actor-img {
    max-height:30vw;
    overflow:hidden;
    img{
    width:100%;
    height:30vw;
    border-radius:10%;
    transition:0.8s;
    }
    img:hover{
        width:106%;
        height:33vw;
        margin-left:-3%;
        margin-top:-3%;
    }
}

.actor-h1{
    font-size:1.2vw;
    margin-bottom:5%;
}

.actor-country{
    line-height: 2%;
    font-size:0.8vw;
}
.actor-dob{
    font-size:0.8vw;
    margin-bottom:5%;

}
.actor-death{
    font-weight:bold;
    font-size:0.8vw;
}



`;