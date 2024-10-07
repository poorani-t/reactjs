// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPdCkPu046_Wau3OEkca0T7sqS5gCGvLI",
  authDomain: "totoo-list.firebaseapp.com",
  projectId: "totoo-list",
  storageBucket: "totoo-list.appspot.com",
  messagingSenderId: "782000164455",
  appId: "1:782000164455:web:8248d6306cb17acfc88ec2",
  measurementId: "G-0MLK99SB2J"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
const db=getFirestore()
export{
    db
}