import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBv1vLph58DgUotlialundDa6efBbzp1zU",
  authDomain: "whatsapp2-97d3c.firebaseapp.com",
  projectId: "whatsapp2-97d3c",
  storageBucket: "whatsapp2-97d3c.appspot.com",
  messagingSenderId: "126913554433",
  appId: "1:126913554433:web:ef5a741f1868ebe7cd3800",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
