import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjAiLID8PgjrlnQYeXrcKkl_k1tWDY2eg",
    authDomain: "multimovie-2dc3c.firebaseapp.com",
    projectId: "multimovie-2dc3c",
    storageBucket: "multimovie-2dc3c.firebasestorage.app",
    messagingSenderId: "755749293720",
    appId: "1:755749293720:web:f5c549e7c98e5c37530aed"
};
initializeApp(firebaseConfig);
const db = getFirestore();

export {db};