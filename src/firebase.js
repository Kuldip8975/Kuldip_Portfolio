import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDG8GHbKDoqWDUnQrFCrJZC4oErp6jcP88",
  authDomain: "portfolio-4e56c.firebaseapp.com",
  databaseURL: "https://portfolio-4e56c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-4e56c",
  storageBucket: "portfolio-4e56c.firebasestorage.app",
  messagingSenderId: "781697453081",
  appId: "1:781697453081:web:6f7c5711702b96d4166e88"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);