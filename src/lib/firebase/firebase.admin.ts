import admin from 'firebase-admin';
import firebaseServiceAccountCredentials from '../../../firebaseserviceaccount.json';

const serviceAccount = firebaseServiceAccountCredentials as admin.ServiceAccount;

if (!admin.apps.length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

export const adminAuth = admin.auth();
