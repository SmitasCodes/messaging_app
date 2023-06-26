import React, { useEffect, useState } from "react";
import Channel from "../Channel";
import { useDispatch, useSelector } from "react-redux";
import { updateChannels } from "../../../redux/features/channels/channelsSlice";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../firebase/firebaseSetup";
import ChannelsSearch from "./ChannelsSearch";

const Channelslist = () => {
  const [channels, setChannels] = useState([]);
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  // Getting all the channels, subscribing to them so then they get added they are shown in real time.
  useEffect(() => {
    const getAllChannels = async () => {
      const unsubscribe = onSnapshot(
        collection(db, "channels"),
        (snapshot) => {
          const newChannels = [];

          snapshot.docChanges().forEach((change) => {
            const channel = change.doc.data();
            channel.id = change.doc.id;

            if (!loggedIn && channel.accessibility === "private") {
              return;
            }

            newChannels.push(channel);
          });

          setChannels([]);
          setChannels((prevChannels) => [...prevChannels, ...newChannels]);
        },
        (error) => {
          console.log("Error fetching new messages:", error);
        }
      );

      return () => {
        unsubscribe();
      };
    };

    getAllChannels();
  }, []);

  // Mapping through channels array and dispatching channels to redux store
  useEffect(() => {
    dispatch(updateChannels(channels));
  }, [channels]);

  // Removing private channels when user logs out
  useEffect(() => {
    if (!loggedIn) {
      let updatedChannels = channels.filter(
        (channel) => channel.accessibility !== "private"
      );
      setChannels(updatedChannels);
    }
  }, [loggedIn]);

  return (
    <div className="mt-2">
      <Link to="/">
        <h2 className="text-lg bg-sky-500 border-2 border-sky-900 h-12 flex items-center justify-center max-md:hidden">
          Channels
        </h2>
      </Link>

      <ChannelsSearch />

      {loggedIn ? (
        ""
      ) : (
        <p className="text-sm text-center my-2 text-slate-600 px-2">
          Since you are not logged in only public channels are displayed
        </p>
      )}

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
