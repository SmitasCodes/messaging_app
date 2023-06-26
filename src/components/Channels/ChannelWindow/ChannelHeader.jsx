import React from "react";
import { useSelector } from "react-redux";

const ChannelHeader = () => {
  const { currentChannel } = useSelector((state) => state.channels);

  return (
    <div className="w-full bg-sky-700 h-12 flex align py-2 px-4">
      <ul className="flex w-full items-center">
        <li className="pr-2 border-r-2 border-sky-900">
          {currentChannel.name}
        </li>
        <li className="pl-2">Description, to be..</li>
        <li className="pl-2 pr-2 border-l-2 border-sky-900 ml-auto">
          <button>Join</button>
        </li>
      </ul>
    </div>
  );
};

export default ChannelHeader;
