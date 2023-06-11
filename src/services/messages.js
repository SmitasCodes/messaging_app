import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebaseSetup";

// Service to create a messages subcollection for a channel
// const createMessagesSubcollection = async (channelRef) => {
//   console.log(channelRef)
//   const addMessages = collection(channelRef, "messages");

//   console.log("Messages subcollection created.");

//   return addMessages;
// };

// Service to add new messages
const addMessage = async (messageData) => {
  await addDoc(collection(db, "channels/qltqk2InfeQykENl1SJP/messages"), {
    ...messageData,
    timestamp: new Date(),
  });

  console.log("Message document added to the subcollection.");
};

export const messagesService = {
  // createMessagesSubcollection,
  addMessage,
};
