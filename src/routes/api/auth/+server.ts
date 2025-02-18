import { error, json } from "@sveltejs/kit";
import { adminAuth } from "$lib/firebase/firebase.admin";
import { AUTHORIZED_EMAILS } from "$env/static/private";

export async function POST({request}){
    const idToken = await request.json();
    adminAuth.verifyIdToken(idToken).then((decodedToken) => {
        let emails = AUTHORIZED_EMAILS.split(',');
        if (decodedToken.email && emails.includes(decodedToken.email)){
            return json({ message: 'authorized' }, {status: 200});
        }
    })
    error(403, 'Unauthorized');
}
