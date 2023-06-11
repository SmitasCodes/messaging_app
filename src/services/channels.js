import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseSetup";
import { messagesService } from "./messages";

// Service for adding new channels
const addNewChannelService = async ({ channel_name, accessibility, logo }) => {
  const addChannel = await addDoc(collection(db, "channels"), {
    channel_name,
    accessibility,
    logo,
    users: [],
    messages: [],
  });

  const channelId = addChannel.id;

  // Update the document with the actual ID
  await updateDoc(addChannel, {
    id: channelId,
  });

  console.log("Document written with ID: ", channelId);

  // Calling out messages service to add messages subcollection
  // messagesService.createMessagesSubcollection(addChannel);
};

// Service for getting all of the channels
const getAllChannelsService = async () => {
  const channelsSnapshot = await getDocs(collection(db, "channels"));

  const channels = channelsSnapshot.docs.map((doc) => doc.data());
  return channels;
};

export const channelServices = {
  addNewChannelService,
  getAllChannelsService,
};
