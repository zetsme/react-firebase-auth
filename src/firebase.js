import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export const registerUser = async (email, password, displayName) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName });
  return auth.currentUser;
};

export const logInUser = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
  return auth.currentUser;
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthChange = (setUser) => {
  onAuthStateChanged(auth, (authUser) => {
    if (authUser) {
      setUser(authUser);
    } else {
      setUser(null);
    }
  });
};
