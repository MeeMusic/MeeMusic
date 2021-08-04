import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Replace project keys here
const  firebaseConfig = {
  apiKey: "AIzaSyCjFtXh-w5kupxavZPpMyNThOcADrWLcoc",
  authDomain: "meemusic-e522a.firebaseapp.com",
  projectId: "meemusic-e522a",
  storageBucket: "meemusic-e522a.appspot.com",
  messagingSenderId: "599253503328",
  appId: "1:599253503328:web:3b02abb2cb36c57e00a205"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const getServerTimeStamp = firebase.firestore.FieldValue.serverTimestamp;
