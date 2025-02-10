import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import { browser } from '$app/environment';
export let app: FirebaseApp;
export let auth: Auth;

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
export const initializeFirebase = () => {
    if (!browser) {
        throw new Error("Can't use the Firebase client on the server.");
    }
    if (!app) {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
    }
};
