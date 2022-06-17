import firebase from "firebase";
require("@firebase/firestore");



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiWwQDghzlMuOCfClkln2xsxuikOEaqSc",
  authDomain: "project-c71-5bf31.firebaseapp.com",
  projectId: "project-c71-5bf31",
  storageBucket: "project-c71-5bf31.appspot.com",
  messagingSenderId: "702436110559",
  appId: "1:702436110559:web:23b1959aab1c5d28b0b96a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
