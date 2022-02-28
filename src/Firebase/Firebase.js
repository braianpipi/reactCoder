import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDh6YB6VxWCvPB_zt2t-YQxdpQvATTnrPM",
  authDomain: "react-24015.firebaseapp.com",
  projectId: "react-24015",
  storageBucket: "react-24015.appspot.com",
  messagingSenderId: "358729186030",
  appId: "1:358729186030:web:cac009505ed1d8605b11ff",
  measurementId: "G-V5THGMESZC"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
