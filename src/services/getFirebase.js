import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import "firebase/app";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const app = firebase.initializeApp({
  apiKey: "AIzaSyBR8BUx1kr2R0i_0VJb_oiu9ZK_WjC-ZRs",
  authDomain: "barragan-ecommerce.firebaseapp.com",
  projectId: "barragan-ecommerce",
  storageBucket: "barragan-ecommerce.appspot.com",
  messagingSenderId: "654911467793",
  appId: "1:654911467793:web:6f1dd987f9444f102bdcb0"
})

export function getFirebase(){
  return app;
}

export function getFirestore(){
  return firebase.firestore(app)
}