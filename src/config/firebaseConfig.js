import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-Fl5CTf-xbICfi5N036U0I2aKl-uxwUk",
    authDomain: "lifetracker-c3ae0.firebaseapp.com",
    databaseURL: "https://lifetracker-c3ae0.firebaseio.com",
    projectId: "lifetracker-c3ae0",
    storageBucket: "lifetracker-c3ae0.appspot.com",
    messagingSenderId: "345708937821",
    appId: "1:345708937821:web:b21bd025cde60be28783b4",
    measurementId: "G-7TV7CSTLNE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore();

export default firebase;