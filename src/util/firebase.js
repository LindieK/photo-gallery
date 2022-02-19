// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCILG9JCYzGpQsbIGEzCKAT0r2ElUfUsd8",
  authDomain: "linda-photo-gallery.firebaseapp.com",
  projectId: "linda-photo-gallery",
  storageBucket: "linda-photo-gallery.appspot.com",
  messagingSenderId: "507696701682",
  appId: "1:507696701682:web:92f3a773c335a17b8cf06b",
  measurementId: "G-3L95F15GC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export default app;
