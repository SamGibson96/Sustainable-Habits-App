
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxu4SmncKPOS3A-nnWHpFZ4Qdc_8n__9s",
  authDomain: "flower-power-app.firebaseapp.com",
  projectId: "flower-power-app",
  storageBucket: "flower-power-app.firebasestorage.app",
  messagingSenderId: "1005857918534",
  appId: "1:1005857918534:web:798f2516d0f1c3a08fc447",
  measurementId: "G-W2ZMF31P2W",
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const db = getFirestore(app); 

export default app;
