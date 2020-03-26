import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTu5ghoPKhhu0odnWxGkZx9PzYT3mPRIs",
  authDomain: "crwn-db-20078.firebaseapp.com",
  databaseURL: "https://crwn-db-20078.firebaseio.com",
  projectId: "crwn-db-20078",
  storageBucket: "crwn-db-20078.appspot.com",
  messagingSenderId: "310457306480",
  appId: "1:310457306480:web:272c2aba921746f07c53b5",
  measurementId: "G-D5E3N3TS9Q"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
