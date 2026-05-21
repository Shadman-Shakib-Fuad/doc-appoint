"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";

import auth from "@/services/auth";

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
  }, []);

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