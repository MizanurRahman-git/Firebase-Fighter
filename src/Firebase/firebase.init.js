// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBImPzNCeYSl786PmggwgVDvBqQ9NpK334",
  authDomain: "fir-fighter-1af85.firebaseapp.com",
  projectId: "fir-fighter-1af85",
  storageBucket: "fir-fighter-1af85.firebasestorage.app",
  messagingSenderId: "753181051675",
  appId: "1:753181051675:web:1fdc1147c8e7c6cb3d61be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;