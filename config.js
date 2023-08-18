import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFks8y2_-RjkhkxRej9YB7XF6OoMAOjHE",
  authDomain: "react-native-d42c3.firebaseapp.com",
  databaseURL: "https://react-native-d42c3.firebaseio.com",
  projectId: "react-native-d42c3",
  storageBucket: "react-native-d42c3.appspot.com",
  messagingSenderId: "490891322505",
  appId: "1:490891322505:web:4b3b5f9ed1682b92959258",
  measurementId: "G-18DVW2H63Q",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
