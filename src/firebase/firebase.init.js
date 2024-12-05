// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_HMz1MzaC7wqfyXGZRZa40sXhgNa2l40",
  authDomain: "coffee-store-f9b15.firebaseapp.com",
  projectId: "coffee-store-f9b15",
  storageBucket: "coffee-store-f9b15.firebasestorage.app",
  messagingSenderId: "79331137908",
  appId: "1:79331137908:web:5ffec5a891cf5e0b0bb421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);