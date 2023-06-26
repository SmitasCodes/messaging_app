import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../../../firebase/firebaseSetup";

const ChannelUsers = () => {
  const [users, setUsers] = useState([]);
  const { currentChannel } = useSelector((state) => state.channels);

  useEffect(() => {
    const getUsers = async () => {
      const unsubscribe = onSnapshot(
        collection(db, `channels/${currentChannel.id}/users`),
        (snapshot) => {
          const newUsers = snapshot.docChanges().map((change) => {
            console.log(change);
            const user = change.doc.data();
            user.id = change.doc.id;
            return user;
          });

          setUsers([]);
          setUsers((prevUsers) => [...prevUsers, ...newUsers]);
        },
        (error) => {
          console.log("Error fetching new messages:", error);
        }
      );

      return () => {
        unsubscribe();
      };
    };

    getUsers();
  }, [currentChannel]);

  return (
    <ul className="w-1/4 max-w-channels_users bg-sky-300 min-w-channels  max-md:w-20 max-sm:w-16 h-screen px-2">
      <h2 className="text-lg bg-sky-500 h-10 flex items-center justify-center max-md:hidden">
        Users
      </h2>
      {users.length == 0 ? (
        <p className="text-sm text-center my-2 text-slate-600 px-2">No users in this channel</p>
      ) : (
        users.map((user) => {
          return (
            <li
              className="md:bg-sky-500 flex justify-between items-center min-h-fit py-1 px-2 max-sm:px-1 my-1 rounded-md md:hover:bg-sky-600 md:border-2 md:border-sky-600 transition cursor-pointer"
              key={user.name}
            >
              <h3>{user.username}</h3>
              <img
                src={
                  user.logo == ""
                    ? "https://cdn-icons-png.flaticon.com/512/1/1247.png"
                    : user.logo
                }
                alt={user.logo}
                className="h-8 w-8 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full bg-white"
              />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default ChannelUsers;
