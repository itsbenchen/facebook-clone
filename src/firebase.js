import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD7vLQHthZJXTbXyeVGPyJjW6Jt6sKbP7Q",
    authDomain: "facebook-clone-a7e16.firebaseapp.com",
    projectId: "facebook-clone-a7e16",
    storageBucket: "facebook-clone-a7e16.appspot.com",
    messagingSenderId: "63678199292",
    appId: "1:63678199292:web:05895b36918f49b9dc6e79",
    measurementId: "G-G2WZVHYPKS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // Google Sign-in for our login option

export {authentication, provider};
export default database;