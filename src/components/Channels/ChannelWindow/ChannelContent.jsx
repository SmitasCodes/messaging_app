import React from "react";
import ChannelUsers from "./ChannelUsers";
import ChannelMessagesContainer from "./ChannelMessagesContainer";
import { useDispatch } from "react-redux";
import { setCurrentChannel } from "../../../redux/features/channels/channelsSlice";
import { useEffect } from "react";

const ChannelContent = ({ id, name, users }) => {
  const dispatch = useDispatch();

  //Once page loads useEffect is dispatching current channel ID
  useEffect(() => {
    dispatch(setCurrentChannel({ id, name, users }));
  }, [id]);

  return (
    <>
      <ChannelUsers />
      <ChannelMessagesContainer />
    </>
  );
};

export default ChannelContent;
