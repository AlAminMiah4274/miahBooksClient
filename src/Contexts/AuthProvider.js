import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // to create the user 
    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // to get current user 
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user: ", currentUser);
        });

        return () => unSubscribe();

    }, []);

    // to login the user
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {
        user,
        userCreate,
        userLogin,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;