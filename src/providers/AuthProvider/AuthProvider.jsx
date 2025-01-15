
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // ---Google Auth Provider---
    const googleProvider = new GoogleAuthProvider();

    // ---Use State---
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState();


    // ---Handle Register/SignUp---
    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ---Handle LogIn/SignIn---
    const handleLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---Handle Google Login---
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // ---Handle Update Profile---
    const manageUpdateProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // ---Handle SignOut/Logout---
    const handleLogOut = () => {
        signOut(auth)
    }

    // ---Handle Forgot Password---
    const handleForgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    // ---Use Effect---
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setSuccess(currentUser)
            }
            else {
                setUser(null)
            }
            setLoading(false)

            // ---Return---
            return () => {
                unSubscribe();
            }
        })
    }, [])

    // ---auth Info---
    const authInfo = {
        handleRegister,
        handleLogIn,
        handleGoogleLogin,
        handleLogOut,
        handleForgotPassword,
        manageUpdateProfile,
        setUser,
        user,
        setSuccess,
        success,
        loading,
        setLoading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;