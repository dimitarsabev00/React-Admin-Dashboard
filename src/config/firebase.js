import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyARsS0SwQIW38n7EigGlRuWWGf9VW4RxOY",
  authDomain: "react-admin-dashboard-7ebfc.firebaseapp.com",
  projectId: "react-admin-dashboard-7ebfc",
  storageBucket: "react-admin-dashboard-7ebfc.appspot.com",
  messagingSenderId: "74335431129",
  appId: "1:74335431129:web:cc9e2084dc554724d1d1c8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
