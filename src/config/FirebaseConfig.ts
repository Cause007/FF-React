import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB0-rOgW0Hn_UuWA9tgWXOycdFb1qEE-T4",
  authDomain: "image-upload-capstone.firebaseapp.com",
  projectId: "image-upload-capstone",
  storageBucket: "image-upload-capstone.appspot.com",
  messagingSenderId: "981111973720",
  appId: "1:981111973720:web:d1af8846894abd345b672d"
};


const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)