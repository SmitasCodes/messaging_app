import React, { useEffect, useState } from "react";
import Channel from "./Channel";
import { channelServices } from "../../services/channels";
import { useDispatch } from "react-redux";
import { updateChannels } from "../../redux/features/channels/channelsSlice";
import { Link } from "react-router-dom";

const Channelslist = () => {
  const [channels, setChannels] = useState([]);
  const dispatch = useDispatch();

  // Getting all the channels and putting it into array
  useEffect(() => {
    const getAllChannels = async () => {
      setChannels(await channelServices.getAllChannelsService());
    };

    getAllChannels();
  }, []);

  // Mapping through channels array and dispatching channels to redux store
  useEffect(() => {
    dispatch(updateChannels(channels));
  }, [channels]);

  return (
    <div className="mt-2">
      <Link to="/">
        <h2 className="text-lg bg-sky-500 border-2 border-sky-900 h-12 flex items-center justify-center max-md:hidden">
          Channels
        </h2>
      </Link>
      <div className="h-12 flex items-center justify-center bg-sky-500 md:hidden">
        <img
          src="/bars-solid.svg"
          alt="Bars"
          className="h-10 w-10 max-sm:w-9 max-sm:h-9 "
        />
      </div>

      <ul className="px-2">
        {channels.map((channel) => {
          return (
            <Channel
              name={channel.channel_name}
              logo={channel.logo}
              id={channel.id}
              key={channel.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Channelslist;
