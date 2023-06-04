import React from "react";

const Channel = ({ name, logo }) => {
  return (
    <li className="md:bg-sky-500 flex justify-between items-center min-h-fit py-1 px-2 max-sm:px-1 my-1 rounded-md md:hover:bg-sky-600 md:border-2 md:border-sky-600 transition cursor-pointer">
      <p className="max-md:hidden">{name}</p>
      <img
        src={logo}
        alt={logo}
        className="h-8 w-8 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full  "
      />
    </li>
  );
};

export default Channel;
