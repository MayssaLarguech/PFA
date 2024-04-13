import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBW-Z7b2v10putb_9VJ3_EkEAR1cRrT0II",
  authDomain: "pfa1-e1186.firebaseapp.com",
  projectId: "pfa1-e1186",
  storageBucket: "pfa1-e1186.appspot.com",
  messagingSenderId: "295631529487",
  appId: "1:295631529487:web:d3e7fa0a133d600130257a",
  measurementId: "G-8BLMDCDK61"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with the Firebase app instance
const db = getFirestore(app); // Pass the Firebase app instance to getFirestore





// Export auth and db
export const auth = getAuth(app);
export { db }; // Exporting db using the named export syntax
