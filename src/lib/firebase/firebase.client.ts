import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
};

let firebaseClientApp: FirebaseApp | undefined;

if (!getApps().length) {
    firebaseClientApp = initializeApp(firebaseConfig, "client");
} else {
    firebaseClientApp = getApps()[0];
}

const firebaseClientAuth = getAuth(firebaseClientApp);

export { firebaseClientApp, firebaseClientAuth };
