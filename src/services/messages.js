import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebaseSetup";

// Service to create a messages subcollection for a channel
const createMessagesSubcollection = (channelRef) => {
  const messagesRef = collection(channelRef, "messages");

  console.log("Messages subcollection created.");

  return messagesRef;
};

// Service to add new messages
const addMessage = async ( channelId, messageData ) => {
  await addDoc(collection(db, `channels/${channelId}/messages`), {
    ...messageData,
    timestamp: new Date(),
  });

  console.log("Message document added to the subcollection.");
};

export const messagesService = {
  createMessagesSubcollection,
  addMessage,
};
