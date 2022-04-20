// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuQuPfVr_WWiZkG1_vY5x4o3nmBgDNzcY",
  authDomain: "hotel-fub.firebaseapp.com",
  projectId: "hotel-fub",
  storageBucket: "hotel-fub.appspot.com",
  messagingSenderId: "701614306797",
  appId: "1:701614306797:web:fb9bbcc3a3c3fbe83823e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;