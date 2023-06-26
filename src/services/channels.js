import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import db from "../firebase/firebaseSetup";
import { messagesService } from "./messages";

// Service for adding new channels
const addNewChannelService = async ({ channel_name, accessibility, logo }) => {
  const channelRef = await addDoc(collection(db, "channels"), {
    channel_name,
    accessibility,
    logo,
    users: [],
  });

  // const channelId = channelRef.id;

  // // Update the document with the actual ID
  // await updateDoc(channelRef, {
  //   id: channelId,
  // });

  // console.log("Document written with ID: ", channelRef);

  // Calling out messages service to add messages subcollection
  // messagesService.createMessagesSubcollection();
};

// Service for getting all of the channels
const getAllChannelsService = async () => {
  // const channelsSnapshot = await getDocs(collection(db, "channels"));

  // const channels = channelsSnapshot.docs.map((doc) => {
  //   const channel = doc.data();
  //   channel.id = doc.id;
  //   return channel;
  // });

  // return channels;

  return new Promise((resolve, reject) => {
    onSnapshot(
      collection(db, `channels`),
      (snapshot) => {
        const channels = snapshot.docChanges().map((change) => {
          const channel = change.doc.data();
          channel.id = change.doc.id;
          return channel;
        });
        resolve(channels);
      },
      reject
    );
  });
};

// Service for  joining channel
const joinChannelService = async ({ channelID, uid, username, logo }) => {

  console.log(channelID, logo)
  const channelRef = await addDoc(
    collection(db, `channels/${channelID}/users`),
    {
      uid,
      username,
      logo,
    }
  );

  // const channelId = channelRef.id;

  // // Update the document with the actual ID
  // await updateDoc(channelRef, {
  //   id: channelId,
  // });

  // console.log("Document written with ID: ", channelRef);

  // Calling out messages service to add messages subcollection
  // messagesService.createMessagesSubcollection();
};

export const channelServices = {
  addNewChannelService,
  getAllChannelsService,
  joinChannelService,
};
