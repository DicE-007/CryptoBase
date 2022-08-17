import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBrWuSaI2cQdte32-kApmsDFLK8KBLTwjQ",
  authDomain: "cryptobase-2afa3.firebaseapp.com",
  projectId: "cryptobase-2afa3",
  storageBucket: "cryptobase-2afa3.appspot.com",
  messagingSenderId: "1016935965136",
  appId: "1:1016935965136:web:0e6d3b126c88306a1559d5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
