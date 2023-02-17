// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDuFuDySiVBeM0BxKEsFl2cb4EItSwOebg",
  authDomain: "project-cf9e0.firebaseapp.com",
  projectId: "project-cf9e0",
  storageBucket: "project-cf9e0.appspot.com",
  messagingSenderId: "127241041073",
  appId: "1:127241041073:web:ea0da01eebd5cf7fdc5e90",
  measurementId: "G-S248DCEPB2",
};
// initializeApp method and pass our config file
const firebaseApp = firebase.initializeApp(firebaseConfig);
// data base of firebase is firestore
const db = firebaseApp.firestore();
// for authentication used auth by pass and email
const auth = firebase.auth();
export { db, auth };
