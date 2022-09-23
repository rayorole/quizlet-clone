// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import { auth } from 'firebase/auth';

require('dotenv').config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: 'quizlet-clone-30d54.firebaseapp.com',
  projectId: 'quizlet-clone-30d54',
  storageBucket: 'quizlet-clone-30d54.appspot.com',
  messagingSenderId: '199411095755',
  appId: '1:199411095755:web:a4e8397a81dcce1edba34e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
