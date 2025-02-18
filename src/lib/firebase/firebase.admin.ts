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
} else if (ENVIRONMENT == "online") {
    if (!admin.apps.length){
        admin.initializeApp();
    }
}

const adminAuth = admin.auth();
const adminFirestore = admin.firestore();

export {adminAuth, adminFirestore};
