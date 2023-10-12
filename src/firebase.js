import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtKLodEEPol1umSMNeVw2TBkvSfBFmWU8",
  authDomain: "chat-me-161bd.firebaseapp.com",
  projectId: "chat-me-161bd",
  storageBucket: "chat-me-161bd.appspot.com",
  messagingSenderId: "269588436616",
  appId: "1:269588436616:web:76f9403ddaf7ac113b713d",
  measurementId: "G-1MTBSTHM6S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
