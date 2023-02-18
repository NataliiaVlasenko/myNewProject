 //import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";

import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe7bT6Qua-Lq6Tl7TuoXO55p4GxV-bfCI",
  authDomain: "mynewproject-f4822.firebaseapp.com",
  projectId: "mynewproject-f4822",
  storageBucket: "mynewproject-f4822.appspot.com",
  messagingSenderId: "630200206776",
  appId: "1:630200206776:web:7dd677918e5d2d0b32fb4d",
  measurementId: "G-QNHCF97CSM"
};

//firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 //const auth = firebase.auth();
 //export { auth };

export default firebase.initializeApp(firebaseConfig);