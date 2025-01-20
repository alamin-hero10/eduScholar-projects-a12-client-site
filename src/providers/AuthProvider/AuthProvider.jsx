
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


    // ---Register/SignUp---
    const Register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ---LogIn/SignIn---
    const LogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---Handle Google Login---
    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // ---Handle Update Profile---
    const manageUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // ---Handle SignOut/Logout---
    const LogOut = () => {
        setLoading(true);
        signOut(auth)
    }

    // ---Handle Forgot Password---
    const ForgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    // ---Use Effect---
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.email) {
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
        Register,
        LogIn,
        GoogleLogin,
        LogOut,
        ForgotPassword,
        manageUpdateProfile,
        setUser,
        user,
        setSuccess,
        success,
        loading,
        setLoading,
    }

    // ---Return---
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;