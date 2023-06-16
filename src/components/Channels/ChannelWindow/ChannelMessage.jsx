import React from "react";
import ChannelMessageTime from "./ChannelMessageTime";

const ChannelMessage = ({ username, content, timestamp }) => {
  return (
    <div className="bg-sky-300 mb-2 w-1/2 rounded-md px-2 py-1 relative">
      <h3>{username}</h3>
      <p className="">{content}</p>
      <ChannelMessageTime timestamp={timestamp} />
    </div>
  );
};

export default ChannelMessage;
