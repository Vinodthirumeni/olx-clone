import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyANbXmAkGX7sWM1x1i99bJ0-n2aev3cXQw",
  authDomain: "olx-clone-62747.firebaseapp.com",
  projectId: "olx-clone-62747",
  storageBucket: "olx-clone-62747.appspot.com",
  messagingSenderId: "963724774846",
  appId: "1:963724774846:web:dafa61f5d40c1c28a6bdef",
  measurementId: "G-FQ35BGMDTX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
export {storage};
export default db;