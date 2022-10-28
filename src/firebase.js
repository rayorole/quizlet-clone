// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDR7gT2g4NDmM9wqQYJK86tID9Ji9dm5dg',
  authDomain: 'quizlet-clone-30d54.firebaseapp.com',
  projectId: 'quizlet-clone-30d54',
  storageBucket: 'quizlet-clone-30d54.appspot.com',
  messagingSenderId: '199411095755',
  appId: '1:199411095755:web:a4e8397a81dcce1edba34e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
