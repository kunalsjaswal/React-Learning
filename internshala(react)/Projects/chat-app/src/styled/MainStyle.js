import styled from "styled-components"

export const SidebarDiv=styled.div`
width:40%;
Button{
    font-size:1vw;
}
`; 
export const ImageAdjust=styled.div`
* {
    width: 200px !important;
    height: 200px !important;
    font-size:3vw;
}
`


export const ChatRoomStyle=styled.div`
.custom-scroll {
    &::-webkit-scrollbar {
      width: 4px;
    }
  
    &::-webkit-scrollbar-track {
      background: #ddd;
    }
  
    &::-webkit-scrollbar-thumb {
      background: darken(#ddd, 20%);
    }
  }
`