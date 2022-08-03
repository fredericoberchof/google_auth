import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs9EJrRv1TW89utWtULBRymWZWLmfM3fw",
  authDomain: "auth-75df4.firebaseapp.com",
  projectId: "auth-75df4",
  storageBucket: "auth-75df4.appspot.com",
  messagingSenderId: "275421202141",
  appId: "1:275421202141:web:349593edeacacbace03d34",
};

const app = initializeApp(firebaseConfig);

export const ath = getAuth(app)