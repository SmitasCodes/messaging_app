import React from "react";

// Converting( from seconds, nano seconds to MM-DD HH-MM format) and returning time when message was sent
const ChannelMessageTime = ({ timestamp }) => {
  const date = new Date(timestamp.seconds * 1000);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDate = `${month}-${day}`;
  const formattedTime = `${hours}:${minutes}`;

  return <p className="absolute top-1 right-1">{`${formattedDate} ${formattedTime}h`}</p>;
};

export default ChannelMessageTime;
