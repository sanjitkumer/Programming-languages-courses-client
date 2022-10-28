// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.nextTick.RECT_APP_apiKey ,
  authDomain: process.nextTick.RECT_APP_authDomain ,
  projectId: process.nextTick.RECT_APP_projectId ,
  storageBucket: process.nextTick.RECT_APP_storageBucket ,
  messagingSenderId: process.nextTick.RECT_APP_messagingSenderId,
  appId: process.nextTick.RECT_APP_appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;