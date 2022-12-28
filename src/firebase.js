// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyA_c2l1bt_yFrgIQJl6TkPfgn2FN7uNvDc",
  authDomain: "chat-e45a2.firebaseapp.com",
  projectId: "chat-e45a2",
  storageBucket: "chat-e45a2.appspot.com",
  messagingSenderId: "349104854271",
  appId: "1:349104854271:web:be917993dc7c0b7d09a8ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
