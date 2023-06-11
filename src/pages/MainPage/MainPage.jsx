import React from "react";
import Nav from "../../components/Nav";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ChannelContent from "../../components/Channels/ChannelWindow/ChannelContent";
import RightDiv from "../../components/common/RightDIv";
import Landing from "./Landing";

const MainPage = () => {
  // Retrieving channels from redux store and later going to map through it and create routes for specific channel id's and push props to elements of routes.
  const { channels } = useSelector((state) => state.channels);

  return (
    <div className="h-screen flex">
      <Nav />

      {/* <Routes>
        <Route
          path="/"
          element={
            <Testas>
              <Landing />
            </Testas>
          }
        />
        <Route path="/channels/">
          {channels.map((channel) => {
            return (
              <Route
                key={channel.id}
                path={`${channel.id}`}
                element={
                  <Testas>
                    <ChTestas
                      name={channel.channel_name}
                      messages={channel.messages}
                    />
                  </Testas>
                }
              />
            );
          })}
        </Route>
        ;
      </Routes> */}

      <Routes>
        <Route
          path="/"
          element={
            <RightDiv>
              <Landing />
            </RightDiv>
          }
        />
        <Route path="/channels/">
          {channels.map((channel) => {
            return (
              <Route
                key={channel.id}
                path={`${channel.id}`}
                element={
                  <RightDiv>
                    <ChannelContent
                      name={channel.channel_name}
                      messages={channel.meesages}
                    />
                  </RightDiv>
                }
              />
            );
          })}
        </Route>
        ;
      </Routes>
    </div>
  );
};

export default MainPage;
