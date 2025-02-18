import { ENVIRONMENT } from '$env/static/private';
import admin from 'firebase-admin';

if(ENVIRONMENT == "local"){
    import('../../../firebaseserviceaccount.json').then((firebaseServiceAccountCredentials) => {
        const serviceAccount = firebaseServiceAccountCredentials as admin.ServiceAccount;
        
        if (!admin.apps.length){
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
        }}
    );
} else {
    if (!admin.apps.length){
        admin.initializeApp();
    }
}

export const adminAuth = admin.auth();
