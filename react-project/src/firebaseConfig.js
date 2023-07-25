import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDdh7CLbRUSsO0h5WN2eoe2Lrg5DcvIy6c",
  authDomain: "react-urku.firebaseapp.com",
  projectId: "react-urku",
  storageBucket: "react-urku.appspot.com",
  messagingSenderId: "199279582664",
  appId: "1:199279582664:web:fdbd21615b0b31f322f4fd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)