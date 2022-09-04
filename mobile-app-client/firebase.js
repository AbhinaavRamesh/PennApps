// Import the functions you need from the SDKs you need
import * as firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD3w1wQsiPA5-SBn96wmYLMpW5TCa-dC8",
  authDomain: "idyllic-slice-361403.firebaseapp.com",
  projectId: "idyllic-slice-361403",
  storageBucket: "idyllic-slice-361403.appspot.com",
  messagingSenderId: "369326407674",
  appId: "1:369326407674:web:1106580bac48315696ae43",
  measurementId: "G-EYJ4M4WP3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);