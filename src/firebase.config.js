// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVxQPRjFcCgvDQm9Lmpzaqst5dSrWdAAY",
  authDomain: "crud-47dd2.firebaseapp.com",
  databaseURL: "https://crud-47dd2-default-rtdb.firebaseio.com",
  projectId: "crud-47dd2",
  storageBucket: "crud-47dd2.firebasestorage.app",
  messagingSenderId: "509180436742",
  appId: "1:509180436742:web:024c19927a2fa17319fe87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig