// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh0X_rbfIv4KN6tBn6EUW7Fnq7vuBJtC0",
  authDomain: "instagram-2-85c69.firebaseapp.com",
  projectId: "instagram-2-85c69",
  storageBucket: "instagram-2-85c69.appspot.com",
  messagingSenderId: "71464808567",
  appId: "1:71464808567:web:a0f516921119e30766d672",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
