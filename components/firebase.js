import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDr98GcbUbnEQ8mutcikMnO-ssgdsecVr8",
  authDomain: "symbi-tech.firebaseapp.com",
  projectId: "symbi-tech",
  storageBucket: "symbi-tech.appspot.com",
  messagingSenderId: "653350482320",
  appId: "1:653350482320:web:6c769a9028a6d2d9c08315",
  measurementId: "G-W8WXVS1QZH"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

export default firebase;