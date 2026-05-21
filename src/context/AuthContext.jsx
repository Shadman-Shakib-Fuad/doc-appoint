"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

import app from "@/firebase/firebase.config";

import {
  registerUser,
  loginUser,
  googleLogin,
  logoutUser,
} from "@/services/auth";

const AuthContext =
  createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({
  children,
}) {
  const auth = getAuth(app);

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const createUser = (
    email,
    password
  ) => {
    return registerUser(
      email,
      password
    );
  };

  const login = (email, password) => {
    return loginUser(email, password);
  };

  const googleSignIn = () => {
    return googleLogin();
  };

  const logout = () => {
    return logoutUser();
  };

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, [auth]);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    googleSignIn,
    logout,
  };

  return (
    <AuthContext.Provider
      value={authInfo}
    >
      {children}
    </AuthContext.Provider>
  );
}