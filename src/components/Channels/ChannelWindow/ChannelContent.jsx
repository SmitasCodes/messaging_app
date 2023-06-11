import React from "react";
import ChannelUsers from "./ChannelUsers";
import ChannelMessagesContainer from "./ChannelMessagesContainer";

const ChannelContent = () => {
  return (
    <>
      <ChannelUsers />
      <ChannelMessagesContainer />
    </>
  );
};

export default ChannelContent;
