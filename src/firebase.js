// src/firebase.js

// 1. Import the Firebase functions we need from the SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 2. Your web app's Firebase configuration
//    Copy this from the Firebase console (Project settings -> Your apps)
//    Use YOUR values here.
const firebaseConfig = {
  apiKey: "AIzaSyCxu4SmncKPOS3A-nnWHpFZ4Qdc_8n__9s",
  authDomain: "flower-power-app.firebaseapp.com",
  projectId: "flower-power-app",
  storageBucket: "flower-power-app.firebasestorage.app",
  messagingSenderId: "1005857918534",
  appId: "1:1005857918534:web:798f2516d0f1c3a08fc447",
  measurementId: "G-W2ZMF31P2W",
};

// 3. Initialise the core Firebase app
const app = initializeApp(firebaseConfig);

// 4. Get the services we care about and export them
export const auth = getAuth(app); // for login / signup
export const db = getFirestore(app); // for database (Firestore)

// (Optional) export the app too, if you ever need it directly
export default app;
