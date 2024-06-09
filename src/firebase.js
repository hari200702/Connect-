import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATHCDMu9a8xz9jefGW4eC82PhYyygYkyA",
  authDomain: "chatapp-a5aa2.firebaseapp.com",
  projectId: "chatapp-a5aa2",
  storageBucket: "chatapp-a5aa2.appspot.com",
  messagingSenderId: "727600095737",
  appId: "1:727600095737:web:1d9686821fd18ac75b1d28"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
