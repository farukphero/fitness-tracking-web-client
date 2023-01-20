import React, { createContext, useContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

      const logOut = () => {
        localStorage.removeItem('accessToken')
        setLoading(true);
        return signOut(auth);
      };

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
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export const useUser = () => {
  const user = useContext(AuthContext);
  return user;
}

export default AuthProvider;