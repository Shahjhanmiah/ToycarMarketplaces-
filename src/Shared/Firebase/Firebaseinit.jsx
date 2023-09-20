// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDENx0NG6oxOOxHMWduciVGv0VlDNQhI2k",
  authDomain: "toycar-8df1f.firebaseapp.com",
  projectId: "toycar-8df1f",
  storageBucket: "toycar-8df1f.appspot.com",
  messagingSenderId: "107268970925",
  appId: "1:107268970925:web:5340dedac5ce42763d6924",
  measurementId: "G-X3BV5BPRL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app