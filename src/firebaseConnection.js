import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBUc37Mf_JSj-9ni31RYqTgopiACsud5Fs",
  authDomain: "estudos-curso-udemy.firebaseapp.com",
  projectId: "estudos-curso-udemy",
  storageBucket: "estudos-curso-udemy.appspot.com",
  messagingSenderId: "857527590737",
  appId: "1:857527590737:web:410037b4297c34631dfd70",
  measurementId: "G-L6VNKFHS8S",
};
// Initialize Firebase
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
