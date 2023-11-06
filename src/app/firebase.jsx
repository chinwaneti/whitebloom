// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9NZVQYXtQeuCuQv4Qei_80aoYyhzsKK8",
  authDomain: "whitebloom-2235b.firebaseapp.com",
  projectId: "whitebloom-2235b",
  storageBucket: "whitebloom-2235b.appspot.com",
  messagingSenderId: "533741733232",
  appId: "1:533741733232:web:0bb0c126e387b699117bb5",
  measurementId: "G-BPYV5GYXDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics; // Declare the analytics variable outside the if block

// if (isSupported()) {
//   analytics = getAnalytics(app); // Initialize analytics if it's supported
// }

const auth = getAuth(app);

export { app,  auth };
