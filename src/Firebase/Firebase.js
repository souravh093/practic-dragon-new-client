// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwuxcvp50q6DQxbOniUyGaIONxvw_I698",
  authDomain: "practic-dragon-news.firebaseapp.com",
  projectId: "practic-dragon-news",
  storageBucket: "practic-dragon-news.appspot.com",
  messagingSenderId: "440721987678",
  appId: "1:440721987678:web:e1d642ddee057be0a87ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;