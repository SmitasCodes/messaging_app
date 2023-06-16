import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { messagesService } from "../../../services/messages";
import ChannelMessage from "./ChannelMessage";

const ChannelMessages = () => {
  const { currentChannelID } = useSelector((state) => state.channels);
  const [messages, setMessages] = useState([]);

  // Getting all the messages of a channel once channel changes / loads
  useEffect(() => {
    const getMessages = async () => {
      const messages = await messagesService.getMessagesService(
        currentChannelID
      );
      console.log(messages);
      setMessages(messages);
    };

    getMessages();
  }, [currentChannelID]);

  return (
    <div
      className="flex-1 p-3
  "
    >
      {!messages ? (
        <p>No messages</p>
      ) : (
        messages.map((message) => {
          return (
            <ChannelMessage
              username={message.username}
              content={message.content}
              timestamp={message.timestamp}
              key={message.id}
            />
          );
        })
      )}
    </div>
  );
};

export default ChannelMessages;
