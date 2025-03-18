import { json } from "@sveltejs/kit";
import { adminAuth } from "$lib/firebase/firebase.admin";
import { AUTHORIZED_EMAILS } from "$env/static/private";

export async function POST({request, cookies}){
    const idToken = await request.json();
    return await adminAuth.verifyIdToken(idToken).then(async (decodedToken) => {
        const emails = AUTHORIZED_EMAILS.split(',');
        if (decodedToken.email && emails.includes(decodedToken.email)){
            const cookie = await adminAuth.createSessionCookie(idToken, {expiresIn: 60 * 60 * 24 * 5 * 1000});
            cookies.set('session', cookie, {
                path: '/',
                httpOnly: true,
                secure: true,
            });
            return json({ message: 'authorized' }, {status: 200});
        } else {
            return json({ message: 'unauthorized' }, {status: 401});
        }
    })
}
