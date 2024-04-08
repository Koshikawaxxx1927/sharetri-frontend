import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./apikey";
import { GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
