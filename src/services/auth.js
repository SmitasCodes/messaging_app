import db from "../firebase/firebaseSetup";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { authChange } from "../redux/features/auth/authSlice";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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
            lastTimeActive: true,
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

// Service for checking if user is currently signed in or not and setting offline and online status
const authStateStatus = () => {
  const dispatch = useDispatch();
  let uid = null;

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      uid = user.uid;
      const [username, role, logo] = await userDataDispatch(uid);

      dispatch(authChange({ loggedIn: true, role, username, uid, logo }));

      // Setting online status
      await updateDoc(doc(db, "users", uid), {
        lastTimeActive: true,
      });
    } else {
      // Setting status to offline
      if (uid) {
        await updateDoc(doc(db, "users", uid), {
          lastTimeActive: false,
        });
      }

      console.log("Not Signed In");

      dispatch(
        authChange({ loggedIn: false, role: null, username: null, uid: null })
      );
    }
  });
};

// Additional function, if user is logged in its going to search for user data by his uid
const userDataDispatch = async (uid) => {
  const userRef = doc(db, `users`, uid);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data();
  const { username, logo, role } = userData;
  return [username,role, logo ];
};

// All functions being put into authServices object and then exported
export const authServices = {
  signInService,
  signUpService,
  signOutService,
  authStateStatus,
};
