// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Fo5nfryMs5KGsgxhGBEWzJBk1crpZ8w",
  authDomain: "wolf-academy-project.firebaseapp.com",
  projectId: "wolf-academy-project",
  storageBucket: "wolf-academy-project.appspot.com",
  messagingSenderId: "396863197565",
  appId: "1:396863197565:web:63244d0184b37040befc14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;