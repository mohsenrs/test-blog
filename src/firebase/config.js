import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz6lPb9aRX4ca2y4l-Cj6olh6OEHXoyaY",
  authDomain: "vue-site-15c8b.firebaseapp.com",
  projectId: "vue-site-15c8b",
  storageBucket: "vue-site-15c8b.appspot.com",
  messagingSenderId: "208360284876",
  appId: "1:208360284876:web:965746b5d521e2fba69869",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
