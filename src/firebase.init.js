// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChDajdvik4hzPyRmvX_Rsnkge_5ccsZ5s",
    authDomain: "practi-firebase-authentication.firebaseapp.com",
    projectId: "practi-firebase-authentication",
    storageBucket: "practi-firebase-authentication.appspot.com",
    messagingSenderId: "343049303798",
    appId: "1:343049303798:web:a2c081a6ba319d4d1bded7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app