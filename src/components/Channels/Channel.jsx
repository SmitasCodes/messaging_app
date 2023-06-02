import React from "react";

const Channel = ({ name, logo }) => {
  return (
    <li className=" bg-sky-500 flex justify-between items-center min-h-fit py-1 px-2 my-1 rounded-md hover:bg-sky-600 border-2 border-sky-600 transition cursor-pointer ">
      <p>{name}</p>
      <img src={logo} alt={logo} className="h-8 w-8 rounded-full" />
    </li>
  );
};

export default Channel;
