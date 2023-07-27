import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "sneakers-4ee1b.firebaseapp.com",
  projectId: "sneakers-4ee1b",
  storageBucket: "sneakers-4ee1b.appspot.com",
  messagingSenderId: "147025893347",
  appId: "1:147025893347:web:d25b1b955608cde84df2d6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);