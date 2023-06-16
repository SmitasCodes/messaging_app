import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore";
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

  console.log("Document written with ID: ", channelRef);

  // Calling out messages service to add messages subcollection
  // messagesService.createMessagesSubcollection();
};

// Service for getting all of the channels
const getAllChannelsService = async () => {
  const channelsSnapshot = await getDocs(collection(db, "channels"));

  const channels = channelsSnapshot.docs.map((doc) => {
    const channel = doc.data();
    channel.id = doc.id;
    return channel;
  });
  
  return channels;
};

export const channelServices = {
  addNewChannelService,
  getAllChannelsService,
};
