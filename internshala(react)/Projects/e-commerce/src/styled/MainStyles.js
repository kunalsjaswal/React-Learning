import styled from "styled-components";

export const RoutesDiv=styled.div`
position:relative;
background:rgba(177, 177, 177, 0.699);
padding:1%;

.NavLinks{
padding:0.5%;
font-size:1.2vw;
a{
    opacity:0.6;
}
}
a{
    text-decoration:none;
    color:black;
    margin-left:1%;
}
img{
    width:5%;
    margin-left:25%;

}
b{
    font-size:2em;
    margin-left:1%;
}
span.items-cost{
    margin-left:32%;
    font-size:1vw;
    background:black;
    color:white;
    padding:0.5%;
    border-radius:5px;
}
a.active{
    opacity:1;


}

@media (max-width: 1500px) {
    img{
    margin-left:25%;
    }
    span.items-cost{
    font-size:1.3vw;
    }
    
}
@media (max-width: 1200px) {
    img{
    margin-left:20%;
    }
    span.items-cost{
    font-size:1.4vw;
    margin-left:25%;

    }
    
.NavLinks{
    font-size:1.6vw;
}
}
@media (max-width: 920px) {
    height:10vw;
    img{
    margin-left:2%;
    }
    span.items-cost{
        margin-left:60%;
        font-size:1.6vw;

    }
     span.NavLinks{
        position:absolute;
        margin-top:5%;
        margin-left:38%;
        a{
            margin-left:8%;
        }
     }

     .NavLinks{
        font-size:1.8vw;
    }
}
@media (max-width: 580px) {
    height:10vw;
    img{
    margin-left:2%;
    }
    span.items-cost{
        margin-left:45%;
        font-size:2.2vw;

    }
    .NavLinks{
        font-size:2 vw;
    }
}
`

export const PageNotFoundDiv=styled.div`
margin-top:5%;
font-size:2.5vw;
text-align:center;
margin-bottom:14%;
img{
    width:10%;
}

`


export const WelcomeDiv=styled.div`
h1{
    position:absolute;
    font-size:3vw;
    right:0%;
    background:red;
    padding:0.45%;
    width:70%;
}
h2{
    text-align:center;
    background:black;
    padding:1%;
    width:30%;
    color:white;
    margin-top:0%;
    font-size:2vw;
}
.steps{
    background: white;
    text-align:center;
    display:flex;
    padding:1%;

    h3{
        font-size:1.4vw;
    }
    img{
        margin-top:1%;
        border-radius:10%;
        width:60%;
        height:80%;
        transition:0.5s;
    }
    img:hover{
        opacity:0.7;
        box-shadow:2px 2px 10px gray;
    }
}
`

export const MensClothDiv=styled.div`
margin-top:0%;
background:black;
color:white;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;

    button{
        background:black;
        color:white;
        font-size:2vw;
        margin-left:00%;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const MenCardDiv=styled.div`

width:50%;
display:flex;
margin-top:2%;
padding:1%;
background:white;
color:black;
height:20vw;

.men-div{
}
img{
    width:25%;
    height:80%;
}
.product-desc{
    margin-left:4%;
    position:relative;
    h3{
        font-size:1.4vw;
        width:90%;

        span{
            font-size:1vw;
            background:red;
            color:white;
            padding:0.5%;
            position:absolute;
            top:0%;
            border-radius:5px;
            right:0%;
        }
    }

    p{
        text-align: justify;
        margin-top:3%;
        width:80%;

    }

    div{
        width:40%;
        position:absolute;
        bottom:2%;
        font-size:1.2vw;
        font-weight:bold;
        button{
            background:black;
            color:white;
            padding:1% 4%;
            font-size:1vw;
            cursor:pointer;
            transition:0.5s;
        }
        button:hover{
            opacity:0.7;
        }
        span{
            margin-left:5%;
        }
    }

}
`

export const ElectronicsDiv=styled.div`
margin-top:0%;
background:rgb(109, 244, 85);
color:black;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;

    button{
        background:transparent;
        color:black;
        font-size:2vw;
        border:0;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const FemaleClothDiv=styled.div`
margin-top:0%;
background:pink;
color:black;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;

    button{
        background:transparent;
        color:black;
        font-size:2vw;
        border:0;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const JeweleryDiv=styled.div`
margin-top:0%;
background:gold;
color:black;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;

    button{
        background:transparent;
        color:black;
        font-size:2vw;
        border:0;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const FooterDiv=styled.footer`
margin-top:3%;
background:rgba(177, 177, 177, 0.899);
padding:2%;
.left-aside{
    text-align:center;
    font-size:1vw;
    img{
    width:5%;
    }
}
`

export const BuyCardDiv=styled.div`

width:50%;
display:flex;
margin-top:2%;
padding:1%;
background:white;
color:black;
height:20vw;
box-shadow:1px 1px 2px gray;

.men-div{
}
img{
    width:25%;
    height:auto;
}
.product-desc{
    margin-left:4%;
    position:relative;
    h3{
        font-size:1.4vw;
        width:90%;

        span{
            font-size:1vw;
            background:red;
            color:white;
            padding:0.5%;
            position:absolute;
            top:0%;
            border-radius:5px;
            right:0%;
        }
    }

    p{
        text-align: justify;
        margin-top:3%;
        width:80%;

    }

    div{
        position:absolute;
        bottom:2%;
        right:0%;
        font-size:1.2vw;
        font-weight:bold;
        button{
            background:black;
            color:white;
            padding:1% 4%;
            font-size:1vw;
            cursor:pointer;
            transition:0.5s;
        }
        button:hover{
            opacity:0.7;
        }
        span{
            margin-left:5%;
        }
    }

}
`

export const CategoryDiv=styled.div`
display:flex;


.filters{
    border-right:5px solid gray;
    width:20%;
    ul{
        display:flex;
        flex-direction: column-reverse;
        a{
            color:black;
            text-decoration:none;
            margin-top:2%;
            width:40%;
        }
    }
}

.outlet{
    width:80%;

    div{

        div{
            width:80%;
        }
    }

}
`

export const IsLoadinDiv=styled.div`
text-align:center;
margin-bottom:15%;
`

export const CheckOutPriceCardDiv=styled.div`
display:flex;
margin-top:2%;
width:70%;
margin-left:15%;
img{
    width:5%;
}

.product-info{
width:50%; 
margin-left:5%;
margin-top:2%;

}

.input-change{
    width:30%;
    margin-top:2%;
    margin-left:2%;
    .items{
        width:15%;
        font-size:1.2vw;
        padding:0.5% 2%;
    }
    .plus{
        width:15%;
        border:0;
        font-size:1.2vw;
        padding:0.5% 3%;
        background :lightgreen;
        color:black;
        cursor:pointer;

    }
    .minus{
        width:15%;
        border:0;
        font-size:1.2vw;
        padding:0.5% 3%;
        background :red;
        color:white;
        cursor:pointer;

    }
    .confirm-items{
        padding:1% 3%;
        border:2px solid green;
        font-size:1vw;
        background:green;
        margin-left:10%;
        color:white;
        cursor:pointer;
        transition:0.5s;
    }
    .confirm-items:hover{
        background:darkgreen;
        color:white;
    }
}

`