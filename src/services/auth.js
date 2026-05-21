import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "@/firebase/firebase.config";

const auth = getAuth(app);

const googleProvider =
  new GoogleAuthProvider();

export const registerUser = (
  email,
  password
) => {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const loginUser = (
  email,
  password
) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const googleLogin = () => {
  return signInWithPopup(
    auth,
    googleProvider
  );
};

export const logoutUser = () => {
  return signOut(auth);
};

export default auth;