// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf-6uov4xGcg0uRPOpsOOdK-hSMbIZha4",
  authDomain: "vite-contact-72921.firebaseapp.com",
  projectId: "vite-contact-72921",
  storageBucket: "vite-contact-72921.firebasestorage.app",
  messagingSenderId: "175929334753",
  appId: "1:175929334753:web:7b2349a1cbff03f1bb90a0",
  measurementId: "G-DPKWTYEL9V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);