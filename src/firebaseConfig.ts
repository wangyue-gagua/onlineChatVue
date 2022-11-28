// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpayHDeP50cAzVYl00I0e_1tY9hk6_NI",
  authDomain: "onlinechatvue.firebaseapp.com",
  projectId: "onlinechatvue",
  storageBucket: "onlinechatvue.appspot.com",
  messagingSenderId: "715385842389",
  appId: "1:715385842389:web:512902a62b80ee2e3d505c",
  measurementId: "G-4PKHE8Z95Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");
export { auth };