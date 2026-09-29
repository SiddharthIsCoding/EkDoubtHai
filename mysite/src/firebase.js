// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCnSvlDHFtLPMQqP93lsjtfYMCgyNFUizc",
  authDomain: "ekdoubthaidb.firebaseapp.com",
  projectId: "ekdoubthaidb",
  storageBucket: "ekdoubthaidb.firebasestorage.app",
  messagingSenderId: "913903644616",
  appId: "1:913903644616:web:054a16a164904713ca1afd",
  measurementId: "G-5PSJV7PSTH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

