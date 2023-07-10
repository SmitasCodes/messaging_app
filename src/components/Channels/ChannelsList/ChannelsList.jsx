import React, { useEffect, useState } from "react";
import Channel from "./Channel";
import { useDispatch, useSelector } from "react-redux";
import { updateChannels } from "../../../redux/features/channels/channelsSlice";
import { Link } from "react-router-dom";
import ChannelsSearch from "./ChannelsSearch";
import ChannelsListMy from "./ChannelsListMy";
import { channelServices } from "../../../services/channels";

const Channelslist = () => {
  const [channels, setChannels] = useState([]);
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  // Calling subscribeToChannels service, to get real time updates
  useEffect(() => {
    setChannels([]);

    const unsubscribe = channelServices.subscribeToChannelsService(
      (snapshot) => {
        const newChannels = [];

        snapshot.docChanges().forEach((change) => {
          const channel = change.doc.data();
          channel.id = change.doc.id;
          newChannels.push(channel);
        });

        setChannels((prevChannels) => [...prevChannels, ...newChannels]);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  // Mapping through channels array and dispatching channels to redux store
  useEffect(() => {
    dispatch(updateChannels(channels));
  }, [channels]);

  return (
    <div className="mt-2 px-2">
      {loggedIn ? (
        <div>
          <ChannelsListMy />
          <h2 className="h-10 flex items-center justify-center bg-sky-500">
            Browse channels
          </h2>
        </div>
      ) : (
        <div>
          <Link to="/">
            <h2 className="text-lg bg-sky-500 border-2 border-sky-900 h-12 flex items-center justify-center max-md:hidden">
              Channels
            </h2>
          </Link>
          <p className="text-sm text-center my-2 text-slate-600 px-2">
            Since you are not logged in only public channels are displayed
          </p>
        </div>
      )}

      <ChannelsSearch />

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
