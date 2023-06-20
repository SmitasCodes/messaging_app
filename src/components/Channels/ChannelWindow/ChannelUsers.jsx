import React from "react";

const ChannelUsers = () => {
  const users = [
    {
      name: "Jonas",
      logo: "https://ps.w.org/url-shortify/assets/icon-256x256.png?rev=2304705",
    },
    {
      name: "Petras",
      logo: "https://ps.w.org/url-shortify/assets/icon-256x256.png?rev=2304705",
    },
    {
      name: "Stepas",
      logo: "https://ps.w.org/url-shortify/assets/icon-256x256.png?rev=2304705",
    },
  ];

  

  return (
      <ul className="w-1/4 max-w-channels_users bg-sky-300 min-w-channels  max-md:w-20 max-sm:w-16 h-screen">
        <h2 className="text-lg bg-sky-500 border-b-4 border-sky-900 h-12 flex items-center justify-center max-md:hidden">
          Users
        </h2>
        {users.map((user) => {
          return (
            <li
              className="md:bg-sky-500 flex justify-between items-center min-h-fit py-1 px-2 max-sm:px-1 my-1 rounded-md md:hover:bg-sky-600 md:border-2 md:border-sky-600 transition cursor-pointer"
              key={user.name}
            >
              <h3>{user.name}</h3>
              <img
                src={user.logo}
                alt={user.logo}
                className="h-8 w-8 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full"
              />
            </li>
          );
        })}
      </ul>
  );
};

export default ChannelUsers;
