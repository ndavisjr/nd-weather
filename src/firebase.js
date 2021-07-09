import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJD8j57Ejr45VkUPLQUcRI9FsMTJ_vpqs",
    authDomain: "davisweather-88e35.firebaseapp.com",
    databaseURL: "https://davisweather-88e35-default-rtdb.firebaseio.com",
    projectId: "davisweather-88e35",
    storageBucket: "davisweather-88e35.appspot.com",
    messagingSenderId: "1098999035917",
    appId: "1:1098999035917:web:8996e97db32d6e6fb27d44",
    measurementId: "G-C5PT43ZFL1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;