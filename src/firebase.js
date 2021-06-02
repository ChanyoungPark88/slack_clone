import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYnpdcEBr7Faaoor4fsZa080Z2DRawazU",
  authDomain: "slack-clone-ed51f.firebaseapp.com",
  projectId: "slack-clone-ed51f",
  storageBucket: "slack-clone-ed51f.appspot.com",
  messagingSenderId: "915049596796",
  appId: "1:915049596796:web:e84b75e55da57795e646f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;
