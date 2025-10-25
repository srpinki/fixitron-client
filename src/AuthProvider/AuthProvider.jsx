import React, { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // ✅ Add role state
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  const updateUser = (updatedData) => updateProfile(auth.currentUser, updatedData);

  // ✅ Load current user and role from backend
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        try {
          const res = await axios.get(
            `http://localhost:3000/users/${currentUser.email}`
          );
          setRole(res.data.role || null); // ✅ Save role from MongoDB
        } catch (error) {
          console.error("Failed to fetch user role:", error);
          setRole(null);
        }
      } else {
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    role, // ✅ Provide role to context
    loading,
    createUser,
    signInUser,
    googleSignIn,
    updateUser,
    logOut,
    setUser, // Optional
    setRole, // Optional 
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
