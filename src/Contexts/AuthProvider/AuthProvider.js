import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUserByEmail=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const accountLogIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
      }
      const providerGoogleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
      };
      const logOut = () => {
        localStorage.removeItem('accessToken')
        setLoading(true);
        return signOut(auth);
      };
      const verifyUser =()=>{
       return sendEmailVerification(auth.currentUser)
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    const authInfo= {
        user,
        loading,
        createUserByEmail,
        accountLogIn,
        logOut,
        verifyUser,
        providerGoogleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;