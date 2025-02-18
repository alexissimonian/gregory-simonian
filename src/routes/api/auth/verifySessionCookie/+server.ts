import { json } from "@sveltejs/kit";
import { adminAuth } from "$lib/firebase/firebase.admin";
import { AUTHORIZED_EMAILS } from "$env/static/private";

export async function POST({request}){
    const sessionCookie = await request.json();
    return await adminAuth.verifySessionCookie(sessionCookie).then((decodedClaim) => {
        let emails = AUTHORIZED_EMAILS.split(',');
        if (decodedClaim.email && emails.includes(decodedClaim.email)){
            return json({ message: 'authorized' }, {status: 200})
        } else {
            return json({ message: 'unauthorized' }, {status: 403});
        }
    })
}