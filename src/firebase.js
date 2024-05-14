// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2Bli9MRAu9ijlVKhhMkSab1Yct2w8GvY",
  authDomain: "toko-mujib.firebaseapp.com",
  projectId: "toko-mujib",
  storageBucket: "toko-mujib.appspot.com",
  messagingSenderId: "976376728819",
  appId: "1:976376728819:web:9bcc5e4f4eb821884abb86",
  measurementId: "G-H3JMZDPE6Q"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();