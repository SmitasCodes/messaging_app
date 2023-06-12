import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { messagesService } from "../../../services/messages";

// Posting messages to channel
const ChannelForm = () => {
  const { username } = useSelector((state) => state.auth);
  const { currentChannelID } = useSelector((state) => state.channels);

  const messageInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = messageInput.current.value;

    // Checking if message is not empty and if not , creating message object and calling message service to post a message
    if (!content.trim()) {
      console.log("Error! Empty message!");
      return;
    }

    const messageData = {
      username,
      content,
    };

    messagesService.addMessageService(currentChannelID, messageData);

    messageInput.current.value = "";
  };

  return (
    <form
      className="bg-red-300 bottom-1 h-16 block p-5 w-full "
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="relative">
        <input type="text" className="w-full block" ref={messageInput} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-md px-2 rounded absolute right-0 top-0"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChannelForm;
