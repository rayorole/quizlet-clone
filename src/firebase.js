// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
