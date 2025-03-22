import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCyf0tk5tX_yhQ3t-1p5WBg-CJW0l8HShw',
  authDomain: 'online-store-75b01.firebaseapp.com',
  projectId: 'online-store-75b01',
  storageBucket: 'online-store-75b01.firebasestorage.app',
  messagingSenderId: '1028336788782',
  appId: '1:1028336788782:web:805c645ea42500387246bf',
  measurementId: 'G-RGMVX5WLYJ',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
