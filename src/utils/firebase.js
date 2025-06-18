// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfMgThP-GLXrtBl-1kv2rZaVmziwudVgs",
  authDomain: "netflixgpt-d05c3.firebaseapp.com",
  projectId: "netflixgpt-d05c3",
  storageBucket: "netflixgpt-d05c3.firebasestorage.app",
  messagingSenderId: "1038492178300",
  appId: "1:1038492178300:web:b22ecb1ea6707858deb6f9",
  measurementId: "G-1RZR4XV51K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
