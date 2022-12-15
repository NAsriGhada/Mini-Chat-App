// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoiSEOgtEF6-unHKQdPQ2xw-WUTH2LGg8",
  authDomain: "chatapp-bf74c.firebaseapp.com",
  projectId: "chatapp-bf74c",
  storageBucket: "chatapp-bf74c.appspot.com",
  messagingSenderId: "962359963335",
  appId: "1:962359963335:web:43cd4cefadafd1988298e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();