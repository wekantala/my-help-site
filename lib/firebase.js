import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "შენი apiKey",
  authDomain: "შენი authDomain",
  projectId: "შენი projectId",
  storageBucket: "შენი storageBucket",
  messagingSenderId: "შენი messagingSenderId",
  appId: "შენი appId",
  measurementId: "შენი measurementId"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };