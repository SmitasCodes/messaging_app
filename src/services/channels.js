import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseSetup";

// Service for adding new channels
const addNewChannelService = async ({ channel_name, accessibility, logo }) => {
  if (!channel_name.trim() || !accessibility.trim() || !logo.trim()) {
    console.log("Please enter all the fields");
    return;
  }

  const addChannel = await addDoc(collection(db, "channels"), {
    channel_name,
    accessibility,
    logo,
    users: [],
    messages: [],
  });

  console.log("Document written with ID: ", addChannel.id);
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
