import db from "../firebase/firebaseSetup";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { authChange } from "../redux/features/auth/authSlice";

import { addDoc, collection } from "firebase/firestore";

const auth = getAuth();

// Service for user to be logged in.
const signInService = async ({ email, password }) => {
  if (!email.trim() || !password.trim()) {
    console.log("Please enter all the fields");
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {})
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
        const user = { firstName, lastName, email, password, role: "user" };
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

// Service for signing out user
const signOutService = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error.message);
    });
};

// Service for checking if user is currently signed in or not
const authStateStatus = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Signed In");
      dispatch(authChange({ loggedIn: true, role: "user" }));
    } else {
      dispatch(authChange({ loggedIn: false, role: null }));
      console.log("Not Signed In");
    }
  });
};

// All functions being put into authServices object and then exported
export const authServices = {
  signInService,
  signUpService,
  signOutService,
  authStateStatus,
};
