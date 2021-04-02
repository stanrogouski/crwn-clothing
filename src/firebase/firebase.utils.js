import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAEaOb5hpdzceKSxoptBLtEaQWi5UfLa9k",
    authDomain: "crwn-db-89f5e.firebaseapp.com",
    projectId: "crwn-db-89f5e",
    storageBucket: "crwn-db-89f5e.appspot.com",
    messagingSenderId: "662804239532",
    appId: "1:662804239532:web:fc4a1c6f9abc11d1a3bb09",
    measurementId: "G-ZNYPT0YBL4"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
