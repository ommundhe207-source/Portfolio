
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdYkRXaaKrIRlcujPzOyPVkADmVwsjxyM",
  authDomain: "folio-10489.firebaseapp.com",
  databaseURL: "https://folio-10489-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "folio-10489",
  storageBucket: "folio-10489.appspot.com",
  messagingSenderId: "226675536111",
  appId: "1:226675536111:web:8102f1538d1499c3a66b1a"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);