import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmex09Y4GxV5J8yzkk6bFbwXOX5lNKqy4",
    authDomain: "login-demo-ffe08.firebaseapp.com",
    databaseURL: "https://login-demo-ffe08-default-rtdb.firebaseio.com",
    projectId: "login-demo-ffe08",
    storageBucket: "login-demo-ffe08.appspot.com",
    messagingSenderId: "907777942928",
    appId: "1:907777942928:web:36dab3055d4aef46803f15",
    measurementId: "G-88RZ2Q8V33"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
