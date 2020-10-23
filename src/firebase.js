
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCRyfY2LRatBHL8ubjKVP09ahJFytgJ9pU",
  authDomain: "facebook-clone-82abc.firebaseapp.com",
  databaseURL: "https://facebook-clone-82abc.firebaseio.com",
  projectId: "facebook-clone-82abc",
  storageBucket: "facebook-clone-82abc.appspot.com",
  messagingSenderId: "536158074666",
  appId: "1:536158074666:web:bcefe70edfd4007a47d053",
  measurementId: "G-CB82JPBB8V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export default db
export { auth, provider}