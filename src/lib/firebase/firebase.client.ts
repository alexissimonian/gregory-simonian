import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

export let firebaseClientApp: FirebaseApp | undefined;
export let firebaseClientAuth: Auth;

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
};

export const initializeFirebaseClient = () => {
    if (!firebaseClientApp){
        firebaseClientApp = initializeApp(firebaseConfig, "client");
        firebaseClientAuth = getAuth(firebaseClientApp);
    }
}
