import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGdaetx0oPnC-Q7NERPsA8OT9RL1rJd0c",
  authDomain: "muserlog.firebaseapp.com",
  projectId: "muserlog",
  storageBucket: "muserlog.firebasestorage.app",
  messagingSenderId: "874965661140",
  appId: "1:874965661140:web:436186a9f261fde0291241"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)