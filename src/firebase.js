import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfvDBUny6wDBZVpboQURojXCTd8XGcugI",
    authDomain: "clase1-fca94.firebaseapp.com",
    projectId: "clase1-fca94",
    storageBucket: "clase1-fca94.firebasestorage.app",
    messagingSenderId: "121122898191",
    appId: "1:121122898191:web:2dd2399832fc479c207e7a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };