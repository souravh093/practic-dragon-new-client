import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const loggedUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const updateProfileUser = (name, url) => {
    return updateProfile(Auth.currentUser, {
        displayName: name, photoURL: url
    })
  }

  const logOut = () => {
    setLoader(true);
    signOut(Auth)
  }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, loggedUser => {
      setUser(loggedUser)
      setLoader(false);
    })

    return () => {
      unsubscribe();
    }
  }, [])
  const authInfo = {
    user,
    loader,
    createUser,
    loggedUser,
    logOut,
    updateProfileUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
