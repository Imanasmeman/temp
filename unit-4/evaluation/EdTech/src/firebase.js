import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBYub-YBzStUSpO8rIRaysLIxEXuqSu4kk",
  authDomain: "edtech-2dc87.firebaseapp.com",
  databaseURL: "https://edtech-2dc87-default-rtdb.firebaseio.com",
  projectId: "edtech-2dc87",
  storageBucket: "edtech-2dc87.firebasestorage.app",
  messagingSenderId: "523331644142",
  appId: "1:523331644142:web:b1ca7608783a359b9621ff"
};


const app = initializeApp(firebaseConfig);


const db = getDatabase(app);

export { db };
