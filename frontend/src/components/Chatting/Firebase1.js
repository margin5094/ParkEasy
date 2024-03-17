import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {};

const app1 = initializeApp(firebaseConfig, "app1");
const storage = getStorage(app1);
export const db = getFirestore(app1);
export { storage };
