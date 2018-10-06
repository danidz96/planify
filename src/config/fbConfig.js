import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBqPrSgwIGgSvQ2Ap7JikZsT5qXcc8cYDM",
    authDomain: "planify-5fdd8.firebaseapp.com",
    databaseURL: "https://planify-5fdd8.firebaseio.com",
    projectId: "planify-5fdd8",
    storageBucket: "planify-5fdd8.appspot.com",
    messagingSenderId: "930536533949"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;