import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { app } from "../../firebase.config";
 

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserByEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const accountLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const providerGoogleLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateUser = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile)
  };
 const emailVerify =()=>{
  setLoading(true);
  return sendEmailVerification(auth.currentUser)
 }
 const forgotPassword=(email)=>{
  setLoading(true);
 return sendPasswordResetEmail(auth, email)
 }
  const logOut = () => {
    localStorage.removeItem("accessToken");
    setLoading(true);
    return signOut(auth);
  };

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`https://fitness-tracking-web-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user?.email]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const {
    data: weightLoggedInfo = [],
    refetch,
    isLoading,
} = useQuery({
    queryKey: ["loggedInfo", user?.email],
    queryFn: () =>
        fetch(`https://fitness-tracking-web-server.vercel.app/logedWeight?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                return data;
            }),
});

  const authInfo = {
    user,
    loading,
    createUserByEmail,
    accountLogIn,
    updateUser,
    emailVerify,
    forgotPassword,
    logOut,
    providerGoogleLogIn,
    userInfo,
    weightLoggedInfo
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
