import React from "react";
import { BsFillChatDotsFill } from "@react-icons/all-files/bs/BsFillChatDotsFill";

const ChatBox = (props) => {
  return (
    <React.Fragment>
      <div className="chat-box">
        <button className="chat-box-btn" onClick={props.onClick}>
          <BsFillChatDotsFill />
          <span>Chat Now</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default ChatBox;
