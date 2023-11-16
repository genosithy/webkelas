// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRVqeYiuBUrx7E_-WeXD3tJuySyDXl7TA",
  authDomain: "webkelas-c941e.firebaseapp.com",
  projectId: "webkelas-c941e",
  storageBucket: "webkelas-c941e.appspot.com",
  messagingSenderId: "634726012312",
  appId: "1:634726012312:web:e5bfe9d356e67d334c87ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
