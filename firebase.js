// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZdWCdGKlzscONe0AGs8mAUDCAw8ExVdo",
  authDomain: "inventory-management-cffbd.firebaseapp.com",
  projectId: "inventory-management-cffbd",
  storageBucket: "inventory-management-cffbd.appspot.com",
  messagingSenderId: "771711794183",
  appId: "1:771711794183:web:3a4e960e5ed78d18f5fea2",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export { firestore };
