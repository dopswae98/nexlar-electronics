import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const config = {
  apiKey: "AIzaSyAFDYlnq7CRP7wClioPXYFAlYpuTyUQmIs",
  authDomain: "exaluation-d91b2.firebaseapp.com",
  databaseUrl: "https://exaluation-d91b2.firebaseio.com",
  projectId: "exaluation-d91b2",
  storageBucket: "exaluation-d91b2.appspot.com",
  messagingSenderId: "51139076266",
  appId: "1:51139076266:web:58b01d8dad2989cc3470d3",
  measurementId: "G-D18CHES3K8",
};

firebase.initializeApp(config);
// export app = config;
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// Initialize Firebase

/*
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebaseApp.auth();

export { auth };
export default db;

//cheers
*/

export const app = firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestores = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
