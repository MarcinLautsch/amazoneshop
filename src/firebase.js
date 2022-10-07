// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcKyQlFm9cRqTCT0a64lc5D77KnHQkrQs',
  authDomain: 'amozneclone.firebaseapp.com',
  projectId: 'amozneclone',
  storageBucket: 'amozneclone.appspot.com',
  messagingSenderId: '151477503776',
  appId: '1:151477503776:web:2af5eb530694107fa1b945',
  measurementId: 'G-F67SPG5G98'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
