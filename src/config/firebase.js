import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrffTIxPvcO7SWOASLhjDREPTa6Jt3I80",
    authDomain: "proyectoreactjscoder-d80cd.firebaseapp.com",
    projectId: "proyectoreactjscoder-d80cd",
    storageBucket: "proyectoreactjscoder-d80cd.appspot.com",
    messagingSenderId: "958435847684",
    appId: "1:958435847684:web:8d8594c58670c81e018f51"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);