import React from "react";
import { Nav } from "rsuite";
import RoomItem from './RoomItem'
import { ChatRoomStyle } from "../../styled/MainStyle";
const ChatRoomList = ({aboveElHeight}) => {
  return (
    <ChatRoomStyle>
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        overflowY:"scroll",
        height:`calc(100% - ${aboveElHeight}px)`,
    }}
    >
      <Nav.Item>
        <RoomItem/>
      </Nav.Item>
    </Nav>
    </ChatRoomStyle>
  );
};

export default ChatRoomList;
