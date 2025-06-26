
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8RxmBDLETTFcjZYKr8G11IZoMb-ch5eE",
  authDomain: "promptlearn-c5960.firebaseapp.com",
  projectId: "promptlearn-c5960",
  storageBucket: "promptlearn-c5960.firebasestorage.app",
  messagingSenderId: "720636009359",
  appId: "1:720636009359:web:67c9a092daecfeec18c9fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);