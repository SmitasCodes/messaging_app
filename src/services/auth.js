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
import { doc, getDoc, setDoc } from "firebase/firestore";
const auth = getAuth();

// Service for user to be logged in.
const signInService = ({ email, password, onError }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {})
    .catch((error) => {
      onError(error.message.replace("Firebase: ", ""));
    });
};

// Service for user to be signed up
const signUpService = ({
  firstName,
  username,
  lastName,
  email,
  password,
  onError,
}) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      try {
        try {
          const uid = userCredential.user.uid;
          const user = {
            username,
            firstName,
            lastName,
            email,
            role: "user",
            channels: [],
          };
          const userRef = doc(db, "users", uid);
          await setDoc(userRef, user);
          console.log(`User added with ID: ${uid}`);
        } catch (error) {
          console.log(error);
        }
        console.log(`User added: ${user.userName}`);
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      onError(error.message.replace("Firebase: ", ""));
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

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const { uid } = user;
      const  username  = await userDataDispatch(uid);
      console.log("Signed In");
      dispatch(authChange({ loggedIn: true, role: "user", username, uid }));
    } else {
      dispatch(
        authChange({ loggedIn: false, role: null, username: null, uid: null })
      );
      console.log("Not Signed In");
    }
  });
};

// Additional function, if user is logged in its going to search for user data by his uid
const userDataDispatch = async (uid) => {
  const userRef = doc(db, `users`, uid);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();
  const { username } = userData;
  return username;
};

// All functions being put into authServices object and then exported
export const authServices = {
  signInService,
  signUpService,
  signOutService,
  authStateStatus,
};
