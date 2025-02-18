import { ENVIRONMENT } from '$env/static/private';
import admin from 'firebase-admin';
import type { Auth } from 'firebase-admin/auth';

export let adminAuth: Auth;
export let adminFirestore: admin.firestore.Firestore;
export let adminApp: admin.app.App;

export const initializeFirebaseAdmin = () => {
    if(ENVIRONMENT == "local"){
        import('../../../firebaseserviceaccount.json').then((firebaseServiceAccountCredentials) => {
            const serviceAccount = firebaseServiceAccountCredentials as admin.ServiceAccount;
            
            if (!adminApp){
                adminApp = admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount)
                });

                adminAuth = adminApp.auth();
                adminFirestore = adminApp.firestore();
            }}
        );
    } else if (ENVIRONMENT == "online") {
        if (!adminApp){
            adminApp = admin.initializeApp();
        }
    }
}