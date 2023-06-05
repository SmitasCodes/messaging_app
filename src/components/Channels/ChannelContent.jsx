import React from "react";
import ChannelUsers from "./ChannelUsers";

const ChannelContent = ({ name, messages }) => {
  return (
    <div>
      <ChannelUsers />
    </div>
  );
};

export default ChannelContent;
