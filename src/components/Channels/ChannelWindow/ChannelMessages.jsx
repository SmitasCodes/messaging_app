import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChannelMessage from "./ChannelMessage";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../firebase/firebaseSetup";
import { messagesService } from "../../../services/messages";

const ChannelMessages = () => {
  const { currentChannel } = useSelector((state) => state.channels);
  const [messages, setMessages] = useState([]);

  // Calling subscribe to messages service and updating to them in real time
  useEffect(() => {
    setMessages([]);

    const unsubscribe = messagesService.subscribeToMessagesService(
      currentChannel.id,
      (snapshot) => {
        const newMessageArray = snapshot.docChanges().map((change) => {
          const message = change.doc.data();
          message.id = change.doc.id;
          return message;
        });

        setMessages((prevMessages) => [...prevMessages, ...newMessageArray]);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentChannel]);

  return (
    <div
      className="flex-1 p-3
  "
    >
      {messages.length == 0 ? (
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
