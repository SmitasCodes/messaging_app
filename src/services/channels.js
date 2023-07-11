import {
  addDoc,
  collection,
  doc,
  getDoc,
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
};

// Service for getting all of the channels
const getAllChannelsService = async () => {
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
const joinChannelService = async ({ channelID, uid }) => {
  // Adding references to point to a user who is joining a channel
  const addUserRef = await addDoc(
    collection(db, `channels/${channelID}/users`),
    {
      userRef: doc(db, `users/${uid}`),
    }
  );

  // Adding channels reference to users/channels subcollection.
  const addChannelRef = await addDoc(collection(db, `users/${uid}/channels/`), {
    channelRef: doc(db, `channels/${channelID}`),
  });
};

// Service for channels subscribtion, to update channels in real time
export const subscribeToChannelsService = (callback) => {
  return onSnapshot(collection(db, "channels"), callback);
};

// Service to get all the paths to joined users in a channel in real time
export const subscribeToUsersService = (channelId, callback) => {
  return onSnapshot(collection(db, `channels/${channelId}/users`), callback);
};

// Service for getting data from a user path
export const getUserData = async (userPath) => {
  const userSnapshot = await getDoc(doc(db, userPath));
  const user = userSnapshot.data();
  return user;
};

// Service for outputting all joined channels
// const getAllJoinedChannels = async ({ uid }) => {};

export const channelServices = {
  addNewChannelService,
  getAllChannelsService,
  joinChannelService,
  subscribeToChannelsService,
  subscribeToUsersService,
  getUserData,
};
