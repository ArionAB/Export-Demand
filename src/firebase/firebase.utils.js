import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyDx1N-eevUW5OKup--ACTEdjK4japaKp8g",
  authDomain: "organic-valley-5dff5.firebaseapp.com",
  projectId: "organic-valley-5dff5",
  storageBucket: "organic-valley-5dff5.appspot.com",
  messagingSenderId: "407860959104",
  appId: "1:407860959104:web:b3e181653d5c9f2ab91365",
  measurementId: "G-4CJY7CZEKV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //to always trigger the google pop up whenever we are using this
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
