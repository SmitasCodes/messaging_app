import React from "react";
import Nav from "../../components/Nav";
import Channels from "../../components/Channels/Channels";
import Content from "../../components/content";

const MainPage = () => {
  return (
    <div className="h-screen">
      <Channels className="bg-light-gray" />
      <Nav />
      <div className="bg-red-200">
        <Content>
          <h1>
            Welcome to my page! Page was created with React,tailwind and
            Firebase for backend
          </h1>
        </Content>
      </div>
    </div>
  );
};

export default MainPage;
