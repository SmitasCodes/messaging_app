import React from "react";
import ChannelForm from "./ChannelForm";
import ChannelMessages from "./ChannelMessages";

const ChannelMessagesContainer = () => {
  return (
    <div className="bg-red-700 flex-1 flex flex-wrap flex-col">
      <ChannelMessages />
      <ChannelForm />
    </div>
  );
};

export default ChannelMessagesContainer;
