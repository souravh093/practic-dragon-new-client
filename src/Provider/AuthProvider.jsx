import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const loggedUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const updateProfileUser = (name, url) => {
    return updateProfile(Auth.currentUser, {
        displayName: name, photoURL: url
    })
  }
  const authInfo = {
    user,
    createUser,
    loggedUser,
    updateProfileUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
