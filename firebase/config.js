//import * as firebase from "firebase";


import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';
 import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCe7bT6Qua-Lq6Tl7TuoXO55p4GxV-bfCI",
  authDomain: "mynewproject-f4822.firebaseapp.com",
  projectId: "mynewproject-f4822",
  storageBucket: "mynewproject-f4822.appspot.com",
  messagingSenderId: "630200206776",
  appId: "1:630200206776:web:7dd677918e5d2d0b32fb4d",
  measurementId: "G-QNHCF97CSM"
};

export default firebase.initializeApp(firebaseConfig);