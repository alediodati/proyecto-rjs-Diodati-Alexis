import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBenyqPsU367-MCwfEd5zaUdnOusn7HfXQ",
  authDomain: "backend-projecto1.firebaseapp.com",
  projectId: "backend-projecto1",
  storageBucket: "backend-projecto1.firebasestorage.app",
  messagingSenderId: "251211062653",
  appId: "1:251211062653:web:881cdc881ec37886a48014",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
