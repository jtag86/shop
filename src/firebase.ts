import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCfu_TupHdqmmmp6q4lvOkbF-2Z7LplC7Y",
  authDomain: "shop-1d000.firebaseapp.com",
  projectId: "shop-1d000",
  storageBucket: "shop-1d000.appspot.com",
  messagingSenderId: "91602576464",
  appId: "1:91602576464:web:915f08d22d8144f9ae1d55",
  measurementId: "G-67LCGTP86D"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);