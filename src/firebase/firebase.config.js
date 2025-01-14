// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrOUalQBeq1w6TJ3ZQLmsiUFbCxnzVu1A",
  authDomain: "eduscholarship-projects-a12.firebaseapp.com",
  projectId: "eduscholarship-projects-a12",
  storageBucket: "eduscholarship-projects-a12.firebasestorage.app",
  messagingSenderId: "930199139631",
  appId: "1:930199139631:web:22d63421a952f2ef155dda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
