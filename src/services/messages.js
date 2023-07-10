import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebaseSetup";

// Service to create a messages subcollection for a channel
// const createMessagesSubcollection = (channelRef) => {
//   const messagesRef = collection(channelRef, "messages");

//   console.log("Messages subcollection created.");

//   return messagesRef;
// };

// Service to add new messages
const addMessageService = async (channelID, messageData) => {
  await addDoc(collection(db, `channels/${channelID}/messages`), {
    ...messageData,
    timestamp: new Date(),
  });

  console.log("Message document added to the subcollection.");
};

// Service to get all the messages of a channel
const getMessagesService = async (channelID) => {
  const messagesSnapshot = await getDocs(
    collection(db, `channels/${channelID}/messages`)
  );

  const messages = messagesSnapshot.docs.map((doc) => {
    const message = doc.data();
    message.id = doc.id;
    return message;
  });

  return messages;
};

// Service for messages subscribtion, to update messages in real time
export const subscribeToMessagesService = (channelId,callback) => {
  return onSnapshot(collection(db, `channels/${channelId}/messages`), callback);
};

export const messagesService = {
  addMessageService,
  getMessagesService,
  subscribeToMessagesService,
};
