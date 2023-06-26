import React from "react";
import ChannelForm from "./ChannelForm";
import ChannelMessages from "./ChannelMessages";
import { useSelector } from "react-redux";
import ChannelHeader from "./ChannelHeader";

const ChannelMessagesContainer = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  return (
    <div className="bg-sky-600 flex-1 flex flex-wrap flex-col">
      <ChannelHeader />
      <ChannelMessages />
      {
        /* Going to check if user is logged in, if they are not it's not going to let them write messages */
        loggedIn ? <ChannelForm /> : ""
      }
    </div>
  );
};

export default ChannelMessagesContainer;
