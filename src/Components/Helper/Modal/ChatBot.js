import React, { Component } from "react";
import { Launcher } from "react-chat-window";

class ChatBot extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [],
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    });
  }

  selectFile() {
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // cache files.length
    var fl = files.length;
    var i = 0;

    while (i < fl) {
      // localize file var in the loop
      var file = files[i];
      alert(file.name);
      i++;
    }
  }
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      });
    }
  }

  render() {
    return (
      <div>
        <Launcher
          agentProfile={{
            teamName: "Wel Come To Live Chat",
            // imageUrl:
            //   "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>
    );
  }
}

export default ChatBot;
