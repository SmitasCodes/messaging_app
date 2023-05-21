import db from "../firebase/firebaseConfig";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

import { addDoc, collection } from "firebase/firestore";

// Service for user to be logged in.
const signInService = async ({ email, password }) => {
  if (!email.trim() || !password.trim()) {
    console.log("Please enter all the fields");
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User logged in!");
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

// Service for user to be signed up
const signUpService = async ({ firstName, lastName, email, password }) => {
  if (
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !password.trim()
  ) {
    console.log("Please enter all the fields");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async () => {
      try {
        const user = { firstName, lastName, email, password };
        const addUser = await addDoc(collection(db, "users"), user);
        console.log(`User added: ${user.email}`);
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
};

const logOutService = () => {
  
};

export const authServices = {
  signInService,
  signUpService,
  logOutService,
};
