import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDbJ258L4Iz5YGYZLZKVqTagSIkQYs7Qc8",
    authDomain: "nomadic-d6ad8.firebaseapp.com",
    projectId: "nomadic-d6ad8",
    storageBucket: "nomadic-d6ad8.appspot.com",
    messagingSenderId: "693784773127",
    appId: "1:693784773127:web:9909974f9a3e1af4f0a0a2",
    measurementId: "G-FXWYMRLX4H"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);