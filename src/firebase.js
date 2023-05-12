import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7NtcemTArycRqoiIkdUnRCSfgQZUc2XI",
    authDomain: "netflix-cl-9f7f0.firebaseapp.com",
    projectId: "netflix-cl-9f7f0",
    storageBucket: "netflix-cl-9f7f0.appspot.com",
    messagingSenderId: "857987325156",
    appId: "1:857987325156:web:655d7888b743f723b9a0f1",
    measurementId: "G-Z3B0TR8656"
  };

// Takes config and intialize application
const app = initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore(app);
const authInstance = getAuth()

export default { auth: authInstance, db: db}