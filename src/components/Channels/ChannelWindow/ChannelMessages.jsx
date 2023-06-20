import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { messagesService } from "../../../services/messages";
import ChannelMessage from "./ChannelMessage";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../firebase/firebaseSetup";

const ChannelMessages = () => {
  const { currentChannelID } = useSelector((state) => state.channels);
  const [messages, setMessages] = useState([]);

  // Getting all the messages of a channel once channel changes / loads and subscribing to them, making them appear in real time.
  useEffect(() => {
    setMessages([]);

    const getMessages = async () => {
      const unsubscribe = onSnapshot(
        collection(db, `channels/${currentChannelID}/messages`),
        (snapshot) => {
          const newMessageArray = snapshot.docChanges().map((change) => {
            const message = change.doc.data();
            message.id = change.doc.id;
            return message;
          });

          setMessages((prevMessages) => [...prevMessages, ...newMessageArray]);
        },
        (error) => {
          console.log("Error fetching new messages:", error);
        }
      );

      return () => {
        unsubscribe();
      };
    };

    getMessages();
  }, [currentChannelID]);

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
