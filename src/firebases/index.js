// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIO6wL0qdP40hc_l2EKj8C2dYTQZ6Tq0M",
  authDomain: "learn-vue-296af.firebaseapp.com",
  projectId: "learn-vue-296af",
  storageBucket: "learn-vue-296af.appspot.com",
  messagingSenderId: "1051761731287",
  appId: "1:1051761731287:web:1b6f988d46b7f89a5e7292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }