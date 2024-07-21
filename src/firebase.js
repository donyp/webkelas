// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA0vxvigofsqlGpRlgx_sLc_K_4R32cxWE",
  authDomain: "webkelas-64f8d.firebaseapp.com",
  projectId: "webkelas-64f8d",
  storageBucket: "webkelas-64f8d.appspot.com",
  messagingSenderId: "764776062614",
  appId: "1:764776062614:web:d66ed1690de7e1bb8becb7",
  measurementId: "G-SPXXNY0DKK"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();