import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  initializeFirestore,
} from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlsGE0cYiDJXGS8oafJIQsKPSI5Cb4SR0",
  authDomain: "waldo-96e4f.firebaseapp.com",
  projectId: "waldo-96e4f",
  storageBucket: "waldo-96e4f.appspot.com",
  messagingSenderId: "997329373398",
  appId: "1:997329373398:web:4a338a8c0370fe5e4f6177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { useFetchStreams: false });

const getCorrectSquaresOf = async (map) => {
  const docRef = doc(db, "correct-positions", map);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
const addLeaderboardRecord = async (record) => {
  const docRef = await addDoc(collection(db, "leaderboard"), record);
  console.log("Document written with ID: ", docRef.id);
};

export { getCorrectSquaresOf, addLeaderboardRecord };
