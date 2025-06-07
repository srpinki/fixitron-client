import React, { useState } from 'react';
import { AuthContext } from './Context';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
         setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        createUser,
        signInUser,
        googleSignIn,
        loading
    }
    return (
        <AuthContext value={userInfo}>{ children }</AuthContext>
    );
};

export default AuthProvider;