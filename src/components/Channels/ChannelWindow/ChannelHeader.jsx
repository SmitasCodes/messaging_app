import React from "react";
import { useSelector } from "react-redux";
import { channelServices } from "../../../services/channels";

const ChannelHeader = () => {
  const { currentChannel } = useSelector((state) => state.channels);
  const { loggedIn, logo, username, uid } = useSelector((state) => state.auth);

  const handleJoinButton = async () => {
    const channelID = currentChannel.id;
    

    await channelServices.joinChannelService({channelID, uid, logo, username });
  };

  return (
    <div className="w-full bg-sky-700 h-10 flex align py-2 px-4">
      <ul className="flex w-full items-center">
        <li className="pr-2 border-r-2 border-sky-900">
          {currentChannel.name}
        </li>
        <li className="pl-2">Description, to be..</li>
        {loggedIn ? (
          <li className="pl-2 pr-2 border-l-2 border-sky-900 ml-auto">
            <button onClick={() => handleJoinButton()}>Join</button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default ChannelHeader;
