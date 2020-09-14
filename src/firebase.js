import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  
    apiKey: "AIzaSyDduGseMMu3xIt0y7gUBNuHw8gllOndIIo",
    authDomain: "excel-b7752.firebaseapp.com",
    databaseURL: "https://excel-b7752.firebaseio.com",
    projectId: "excel-b7752",
    storageBucket: "excel-b7752.appspot.com",
    messagingSenderId: "573703193482",
    appId: "1:573703193482:web:e8c881ebbf795b06aabe73",
    measurementId: "G-LQL3053LY5"
});

  // Initialize Firebase
  



var db = firebaseApp.firestore();

export { db };