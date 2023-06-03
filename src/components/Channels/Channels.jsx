import React, { useEffect, useState } from "react";
import Channel from "./Channel";
import { channelServices } from "../../services/channels";

const Channels = () => {
  const [channels, setChannels] = useState([]);
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

  useEffect(() => {
    const getAllChannels = async () => {
      setChannels(await channelServices.getAllChannelsService());
    };

    getAllChannels();
  }, []);

  console.log(channels);

  return (
    <div className="w-full max-w-channels bg-sky-300 h-screen min-w-150 float-left px-2">
      <h2 className="text-center py-2 text-lg">Channels</h2>
      <ul>
        {channels.map((channel) => {
          return (
            <Channel
              name={channel.channel_name}
              logo={channel.logo}
              key={channel.channel_name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Channels;
