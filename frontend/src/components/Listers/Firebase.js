// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore(app);
export { storage };
