import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA65bguPguka3RxJU7ZyVfPiLqelgh0dPs",
  authDomain: "netflix-clone-264dd.firebaseapp.com",
  projectId: "netflix-clone-264dd",
  storageBucket: "netflix-clone-264dd.appspot.com",
  messagingSenderId: "110772723132",
  appId: "1:110772723132:web:afefcb1938dc628af49fb9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
