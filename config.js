import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCGWmC4Um0vSAqnlHMBbFJp6ct3AXK4tjo",
    authDomain: "project-71-5b141.firebaseapp.com",
    projectId: "project-71-5b141",
    storageBucket: "project-71-5b141.appspot.com",
    messagingSenderId: "1009464906043",
    appId: "1:1009464906043:web:c617dd4846f069851aa71e"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


