import React from "react";
import ChannelForm from "./ChannelForm";
import ChannelMessages from "./ChannelMessages";
import { useSelector } from "react-redux";

const ChannelMessagesContainer = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <div className="bg-sky-600 flex-1 flex flex-wrap flex-col">
      <ChannelMessages />
      {
        /* {Going to check if user is logged in, if they are not it's not going to let them paste message} */
        loggedIn ? <ChannelForm /> : ""
      }
    </div>
  );
};

export default ChannelMessagesContainer;
