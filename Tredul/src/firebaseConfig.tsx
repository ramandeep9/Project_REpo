// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Pf0qMYVyosv9QXQl5QzHTq470vmpNhs",
  authDomain: "tredul.firebaseapp.com",
  databaseURL: "https://tredul-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tredul",
  storageBucket: "tredul.appspot.com",
  messagingSenderId: "790353321744",
  appId: "1:790353321744:web:d6cb70d224cf3406558f95",
  measurementId: "G-2SP1378XTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;



