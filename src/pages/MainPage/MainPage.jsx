import React from "react";
import Nav from "../../components/Nav";
import Channels from "../../components/Channels/Channels";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ChannelContent from "../../components/Channels/ChannelContent";

const MainPage = () => {
  // Retrieving channels from redux store and later going to map through it and create routes for specific channel id's and push props to elements of routes.
  const { channels } = useSelector((state) => state.channels);

  return (
    <div className="h-screen">
      <Channels className="bg-light-gray" />
      
      {/* <div className="bg-red-200">
          <h1>
            Welcome to my page! Page was created with React,tailwind and
            Firebase for backend
          </h1>
      </div> */}
      <Routes>
        <Route path="/channels/">
          {channels.map((channel) => {
            return (
              <Route
                key={channel.id}
                path={`${channel.id}`}
                element={
                    <ChannelContent
                      name={channel.channel_name}
                      messages={channel.meesages}
                    />
                }
              />
            );
          })}
        </Route>
        ;
      </Routes>
      <Nav />
    </div>
  );
};

export default MainPage;
