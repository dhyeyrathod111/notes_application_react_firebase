import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from '@firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIN8VfdTax3wnDTG_LJlHjdSwIkzVURdY",
    authDomain: "krishivani.firebaseapp.com",
    databaseURL: "https://krishivani-default-rtdb.firebaseio.com",
    projectId: "krishivani",
    storageBucket: "krishivani.appspot.com",
    messagingSenderId: "314587613931",
    appId: "1:314587613931:web:f6f2b1a8623d16878dccae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);