// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2RtpVIvO2Bapaa_NOr9S246mihHTX8eQ",
    authDomain: "ai-studio-b5162.firebaseapp.com",
    projectId: "ai-studio-b5162",
    storageBucket: "ai-studio-b5162.appspot.com",
    messagingSenderId: "833951335382",
    appId: "1:833951335382:web:ae59377a35b9758b9eda77"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
export const db = getFirestore(app)