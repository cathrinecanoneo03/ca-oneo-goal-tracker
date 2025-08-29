import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs5OZ_7o3VMCclmZLHMB7CAWv17x9C9oM",
  authDomain: "goalproject-cmac.firebaseapp.com",
  projectId: "goalproject-cmac",
  storageBucket: "goalproject-cmac.firebasestorage.app",
  messagingSenderId: "807551518191",
  appId: "1:807551518191:web:b93ca4154d06d685d3a21a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)