import admin from 'firebase-admin';

if (!admin.apps.length){
    admin.initializeApp();
}

export const adminAuth = admin.auth();
