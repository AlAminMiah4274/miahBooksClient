import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // to create the user 
    const userCreate = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // to get current user 
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("current user: ", currentUser);
        });

        return () => unSubscribe();

    }, []);

    // to login the user
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // to log out the user
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // to update user profile 
    const userProfileUpdate = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    // to log in with google 
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const authInfo = {
        user,
        loading,
        userCreate,
        userLogin,
        userLogOut,
        userProfileUpdate,
        googleLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;