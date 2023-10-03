// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdeR1RAhSBcM4sY0optihKv97btGy_zPY",
  authDomain: "expensetracker-7ea59.firebaseapp.com",
  projectId: "expensetracker-7ea59",
  storageBucket: "expensetracker-7ea59.appspot.com",
  messagingSenderId: "646450704818",
  appId: "1:646450704818:web:6e9d68c5e3fbf182d1f4ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider(auth)
export const db = getFirestore(app)