
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1iT7aQ17I7ggS95gBDMAfb2KOm0uEwWo",
  authDomain: "food-hygiene-b705c.firebaseapp.com",
  databaseURL: "https://food-hygiene-b705c-default-rtdb.firebaseio.com",
  projectId: "food-hygiene-b705c",
  storageBucket: "food-hygiene-b705c.firebasestorage.app",
  messagingSenderId: "324324325353",
  appId: "1:324324325353:web:129c850115bd8e9cf8fd78"
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it
const db = getDatabase(app);

export { db };
