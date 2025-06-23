// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCKqkWOed9NNUBJbQxW6Q8DIHiyWyqMKV4',
  authDomain: 'online-store-7cc05.firebaseapp.com',
  projectId: 'online-store-7cc05',
  storageBucket: 'online-store-7cc05.firebasestorage.app',
  messagingSenderId: '723010770296',
  appId: '1:723010770296:web:cbabb81b7328e0611f248d',
  measurementId: 'G-E9D831H6BW',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
