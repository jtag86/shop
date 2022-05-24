import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBr2BKRCxgyWJM0IzndWUmlH6K19ShvZRU",
  authDomain: "groovy-cider-155004.firebaseapp.com",
  projectId: "groovy-cider-155004",
  storageBucket: "groovy-cider-155004.appspot.com",
  messagingSenderId: "227011715794",
  appId: "1:227011715794:web:47e79f06fb6ec2d54b430b",
  measurementId: "G-QS6Y45D13Y"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);