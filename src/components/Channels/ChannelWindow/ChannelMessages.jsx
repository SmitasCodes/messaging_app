import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { messagesService } from "../../../services/messages";

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
      className="flex-1
  "
    ></div>
  );
};

export default ChannelMessages;
