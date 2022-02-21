// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5N8okdVy6wOu8I7QXRNB8McjoN2zt3h4",
  authDomain: "haud-react-d13f7.firebaseapp.com",
  projectId: "haud-react-d13f7",
  storageBucket: "haud-react-d13f7.appspot.com",
  messagingSenderId: "498132067854",
  appId: "1:498132067854:web:cb459b6780822b75967e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)