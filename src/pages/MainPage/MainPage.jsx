import React from "react";
import Nav from "../../components/Nav";
import Channels from "../../components/Channels/Channels";

const MainPage = () => {
  return (
    <div className="h-screen">
      <Channels className="bg-light-gray" />
      <Nav />
    </div>
  );
};

export default MainPage;
