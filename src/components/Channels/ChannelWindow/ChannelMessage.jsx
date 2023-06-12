import React from "react";

const ChannelMessage = ({ username, content }) => {
  return (
    <div className="bg-sky-300 mb-2 w-1/2 rounded-md px-2 py-1">
      <h3>{username}</h3>
      <p className="">{content}</p>
    </div>
  );
};

export default ChannelMessage;
