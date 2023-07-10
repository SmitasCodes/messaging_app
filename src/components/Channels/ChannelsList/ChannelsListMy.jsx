import React, { useEffect, useState } from "react";
import { channelServices } from "../../../services/channels";
import { useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../firebase/firebaseSetup";

const ChannelsListMy = () => {
  const { uid } = useSelector((state) => state.auth);
  const [myChannels, setMyChannels] = useState([]);

  useEffect(() => {
    // const getAllChannels = async () => {
    //   const unsubscribe = onSnapshot(
    //     collection(db, `users/${uid}/channels`),
    //     (snapshot) => {
    //       snapshot.docChanges().forEach((change) => {
    //         const channel = change.doc.data().channelRef.path;


    //       });

    //     },
    //     (error) => {
    //       console.log("Error fetching new messages:", error);
    //     }
    //   );

    //   return () => {
    //     unsubscribe();
    //   };
    // };

    // getAllChannels();
  }, [uid]);

  return (
    <div>
      <h2 className="h-10 flex items-center justify-center bg-sky-500">
        My channels
      </h2>
    </div>
  );
};

export default ChannelsListMy;
