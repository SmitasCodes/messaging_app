import React from "react";

const Channel = ({ name, logo }) => {
  return (
    <li className=" bg-red-500 flex justify-between items-center h-12 p-1 px-2 my-1 rounded-md">
      <p>{name}</p>
      <img src={logo} alt={logo} className="h-10 w-10 rounded-full" />
    </li>
  );
};

export default Channel;
