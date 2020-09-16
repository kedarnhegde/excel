import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  
  apiKey: "AIzaSyDcGzCUxKah-nd9PBpd2FBUPSK1TOd9l14",
  authDomain: "excel-contact.firebaseapp.com",
  databaseURL: "https://excel-contact.firebaseio.com",
  projectId: "excel-contact",
  storageBucket: "excel-contact.appspot.com",
  messagingSenderId: "605408975909",
  appId: "1:605408975909:web:6dcc0d17e667afe497b3cc"
});

  // Initialize Firebase
  



var db = firebaseApp.firestore();

export { db };