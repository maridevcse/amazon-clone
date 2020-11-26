import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDkEW1xqx3P57VOUy98N0TzQwyCNXkqe0g",
  authDomain: "clone-a3537.firebaseapp.com",
  databaseURL: "https://clone-a3537.firebaseio.com",
  projectId: "clone-a3537",
  storageBucket: "clone-a3537.appspot.com",
  messagingSenderId: "374941863912",
  appId: "1:374941863912:web:62e14501e7db6a991b9e5d",
  measurementId: "G-LEBDS5FW2P"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
