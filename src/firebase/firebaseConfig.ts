// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIRaKtaNC3o7bVNMUmB0cfQ885tUephaM",
  authDomain: "news-app-ce3c6.firebaseapp.com",
  projectId: "news-app-ce3c6",
  storageBucket: "news-app-ce3c6.appspot.com",
  messagingSenderId: "12376713254",
  appId: "1:12376713254:web:6dc585bdc9daf64ea4dee7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
