import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
  } from "firebase/auth";
  import { FirebaseAuth } from "./config";
  
  const googleProvider = new GoogleAuthProvider();
  
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(FirebaseAuth, googleProvider);
      const { displayName, photoURL, uid, email } = result.user;
      return {
        ok: true,
        displayName,
        email,
        photoURL,
        uid,
      };
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        ok: false,
        errorCode,
        errorMessage,
      };
    }
  };
  
  export const registerUserWithEmail = async (email, password, username) => {
    try {
      const resp = await createUserWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
  
      await updateProfile(FirebaseAuth.currentUser, { displayName: username });
  
      const { uid, photoURL, displayName } = resp.user;
  
      return {
        ok: true,
        displayName,
        email,
        photoURL,
        uid,
      };
    } catch (error) {
      const errorCode = error.errorCode;
      const errorMessage = error.errorMessage;
      return {
        ok: false,
        errorCode,
        errorMessage,
      };
    }
  };
  
  export const loginWithEmailPassword = async ({email, password}) => {
    try {
      const resp = await signInWithEmailAndPassword(
        FirebaseAuth,
        email,
        password
      );
      const { uid, photoURL, displayName } = resp.user;
      return {
        ok: true,
        displayName,
        email,
        photoURL,
        uid,
      };
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        ok: false,
        errorCode,
        errorMessage,
      };
    }
  };
  
  export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
  };