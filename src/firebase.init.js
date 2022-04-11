// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvF7BbqMDn2iBesqUgdDgfRMQv0YEhHA",
  authDomain: "emajhon-simple-6f731.firebaseapp.com",
  projectId: "emajhon-simple-6f731",
  storageBucket: "emajhon-simple-6f731.appspot.com",
  messagingSenderId: "478436082411",
  appId: "1:478436082411:web:74451396b0bc839e16b4ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export  default auth;