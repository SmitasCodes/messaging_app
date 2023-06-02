import React from "react";
import Channel from "./Channel";

const Channels = () => {
  const channelsList = [
    {
      name: "channel 1",
      logo: "https://www.shorturl.at/img/shorturl-icon.png",
    },
    {
      name: "channel 2",
      logo: "https://www.shorturl.at/img/shorturl-icon.png",
    },
    {
      name: "channel 3",
      logo: "https://www.shorturl.at/img/shorturl-icon.png",
    },
  ];

  return (
    <div className="w-full max-w-channels bg-sky-300 h-screen min-w-150 float-left px-2">
      <h2 className="text-center py-2 text-lg">Channels</h2>
      <ul>
        {channelsList.map((channel) => {
          return <Channel name={channel.name} logo={channel.logo} />;
        })}
      </ul>
    </div>
  );
};

export default Channels;
