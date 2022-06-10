import styled from "styled-components";

export const NavbarStyle=styled.div`

text-align:center;
.Title{
    h1{
        color:blue;
        font-size:2vw;
    }
    p{
        font-size:0.8vw;
    }
}
ul{
    list-style-type:none;
    display:flex;
    margin-left:43%;
    width:10%;
    li{
        margin-right:20%;

        a{
            text-decoration:none;
            color:blue;
            font-size:1vw;
            transition:0.5s;
        }
      
        .home-nav{
            box-shadow:${props=>{return props.locpath==='/'?"0px 3px 0px blue":"0px 0px 0px"}}
        }
        .starred-nav{
            box-shadow:${props=>{return props.locpath==='/starred'?"0px 3px 0px blue":"0px 0px 0px"}}

        }

    }
}
`;

export const InputStyle=styled.div`
padding:1%;
text-align:center;
.search-input{
    display:block;
    width:20%;
    margin-left:40%;
    padding:0.2%;
    font-size:1vw;
    border-radius:10px;
    margin-bottom:1%;
}
.inputs-div{
    font-size:1vw;
    input{
        margin-right:4%;
        cursor:pointer;
    }
    label:nth-child(1){
        margin-left:4%;
    }
}
button{
    background:blue;
    color:white;
    padding:0.3% 2%;
    font-size:1.4vw;
    margin-top:1%;
    border:0;
    border-radius:10px;
    cursor:pointer;
    transition:0.6s;
}
button:hover{
    background:black;
}

`;
