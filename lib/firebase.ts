import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkklRQlC5Pe-H3FOYMEOVrevciSpfpY3U",
  authDomain: "bathroom-remodeling-ddafa.firebaseapp.com",
  projectId: "bathroom-remodeling-ddafa",
  storageBucket: "bathroom-remodeling-ddafa.firebasestorage.app",
  messagingSenderId: "1013887386970",
  appId: "1:1013887386970:web:2c8a339fee21514674df63"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
